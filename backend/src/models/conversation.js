import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
