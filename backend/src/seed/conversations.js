import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Conversation from "../models/conversation.js";
import User from "../models/user.js";

const mongooseLoader = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Open!");
  } catch (error) {
    console.log("Uh oh! An error occured!", error);
  }
  const users = await User.find({});
  const user1 = users[0];
  const user2 = users[1];

  // DELETE ALL EXISTING CONVERSATIONS.
  await Conversation.deleteMany({});

  const conversation = new Conversation({
    name: "Test Conversation",
    users: [user1, user2],
    messages: [
      {
        user: user1,
        timestamp: Date.now(),
        message: "Hey, this should be the first message",
      },
      {
        user: user1,
        timestamp: Date.now(),
        message: "Hey, this should be the second message",
      },
      {
        user: user2,
        timestamp: Date.now(),
        message: "Hey, this should be the third message",
      },
      {
        user: user1,
        timestamp: Date.now(),
        message: "Hey, this should be the fourth message",
      },
      {
        user: user2,
        timestamp: Date.now(),
        message: "Hey, this should be the fifth message",
      },
      {
        user: user2,
        timestamp: Date.now(),
        message: "Hey, this should be the sixth message",
      },
    ],
  });
  await conversation.save();
  console.log("Conversation saved!");
  mongoose.connection.close();
};

mongooseLoader();
