import User from "../models/user.js";
import Conversation from "../models/conversation.js";

export const getSearchResults = async (req, res) => {
  const { searchQuery } = req.query;
  let conversations = await Conversation.find({
    users: req.user._id,
  }).populate({
    path: "messages",
    populate: {
      path: "user",
      select: ["username", "image"],
    },
  });

  for (let conversation of conversations) {
    await conversation.addName(req.user);
  }

  conversations = conversations.filter((conversation) =>
    conversation.name.startsWith(searchQuery)
  );

  const users = await User.find({
    _id: { $ne: req.user._id },
    username: { $regex: "^" + searchQuery },
  });
  res.send({ conversations, users });
};
