import mongoose from "mongoose";
const Schema = mongoose.Schema;
import User from "./user.js";

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const conversationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [messageSchema],
});

conversationSchema.post("findOneAndDelete", async function (conversation) {
  await conversation.populate("users");

  for (let user of conversation.users) {
    const filteredConversations = user.conversations.filter((element) => {
      return !element.equals(conversation._id);
    });
    user.conversations = filteredConversations;
    await user.save();
  }
});

conversationSchema.post("save", async function (conversation) {
  if (conversation) {
    const users = await conversation.users;
    for (let user of users) {
      user.conversations.push(conversation);
      await user.save();
    }
  }
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
