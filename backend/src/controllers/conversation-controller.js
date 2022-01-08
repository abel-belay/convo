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
        select: "username",
      },
    },
  });
  res.send(user.conversations);
};
