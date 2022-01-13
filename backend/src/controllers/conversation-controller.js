import User from "../models/user.js";
import Conversation from "../models/conversation.js";

export const showConversations = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findById(userId).populate({
    path: "conversations",
    populate: {
      path: "messages",
      populate: {
        path: "user",
        select: ["username", "image"]
      },
    },
  });
  res.send(user.conversations);
};

export const addMessage = async (req, res) => {
  try {
    const {conversationId, userId} = req.params;
    const message = req.body.message;
    const user = await User.findById(userId);
    const conversation = await Conversation.findById(conversationId);
    const messageData = {user, message, timestamp: Date.now()};
    conversation.messages.push(messageData);
    await conversation.save();
    res.send({message: messageData});
  } catch (e) {
    res.status(500);
    res.send("Failed to add message!");
  }
};
