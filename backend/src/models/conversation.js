import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  time: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const conversationSchema = new Schema({
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
