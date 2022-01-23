import { io } from "../loaders/express.js";
import User from "../models/user.js";
import Conversation from "../models/conversation.js";

export const getConversation = async (req, res) => {
  const conversation = await Conversation.findById(req.params.conversationId);
  await conversation.populate({
    path: "messages",
    populate: {
      path: "user",
      select: ["username", "image"],
    },
  });
  await conversation.addName(req.user);
  res.send({ conversation });
};

export const showConversations = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).populate({
    path: "conversations",
    populate: {
      path: "messages",
      populate: {
        path: "user",
        select: ["username", "image"],
      },
    },
  });
  for (let conversation of user.conversations) {
    await conversation.addName(req.user);
  }
  res.send(user.conversations);
};

export const addMessage = async (req, res) => {
  try {
    const { conversationId, userId } = req.params;
    const message = req.body.message;
    const user = await User.findById(userId);
    const conversation = await Conversation.findById(conversationId);
    const messageData = { user, message, timestamp: Date.now() };
    conversation.messages.push(messageData);
    await conversation.save();
    const messageRes = conversation.messages[conversation.messages.length - 1];
    io.in(`${conversation._id}`).emit(`new-message-${conversation._id}`, {
      message: messageRes,
    });
    res.send({ message: messageRes });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send("Failed to add message!");
  }
};

export const createConversation = async (req, res) => {
  try {
    const conversation = new Conversation({
      users: req.body.users,
      messages: [],
    });
    await conversation.save();
    await conversation.addName(req.user);
    res.send({ conversation });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send("Failed to add message!");
  }
};
