import User from "../models/user.js";
import Conversation from "../models/conversation.js";

export const getSearchResults = async (req, res) => {
  const { searchQuery } = req.query;
  const conversations = await Conversation.find({
    users: req.user._id,
    name: { $regex: "^" + searchQuery },
  }).populate({
    path: "messages",
    populate: {
      path: "user",
      select: ["username", "image"],
    },
  });
  const users = await User.find({
    _id: { $ne: req.user._id },
    username: { $regex: "^" + searchQuery },
  });
  res.send({conversations, users});
};
