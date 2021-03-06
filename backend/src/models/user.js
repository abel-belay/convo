import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  conversations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
