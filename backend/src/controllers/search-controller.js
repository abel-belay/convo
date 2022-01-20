import User from "../models/user.js";
import Conversation from "../models/conversation.js";

export const getSearchResults = async (req, res) => {
  const { searchQuery } = req.query;
  const conversations = await Conversation.find({
    user: req.user._id,
    name: { $regex: "^" + searchQuery },
  }).populate({
    path: "messages",
    populate: {
      path: "user",
      select: ["username", "image"],
    },
  });
  res.send(conversations);
};
