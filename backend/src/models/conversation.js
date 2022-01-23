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
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [messageSchema],
});

conversationSchema.methods.addName = async function (clientUser) {
  await this.populate({
    path: "users",
    select: ["username", "image"],
  });
  const nonClientUsers = [];
  for (let user of this.users) {
    if (!user._id.equals(clientUser._id)) {
      nonClientUsers.push(user.username);
    }
  }
  this.name = nonClientUsers.toString();
};

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
  await conversation.populate("users");
  if (conversation) {
    // ADD CONVERSATION REFERENCE TO USERS IN THE CONVERSATION IF THEY DON'T ALREADY HAVE IT ADDED.
    const users = await conversation.users;
    for (let user of users) {
      if (!user.conversations.includes(conversation.id))
        user.conversations.push(conversation);
      await user.save();
    }
  }
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
