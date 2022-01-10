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
  const user3 = users[2];

  // DELETE ALL EXISTING CONVERSATIONS.
  const conversations = await Conversation.find({});
  for (let conversation of conversations) {
    await Conversation.findOneAndDelete(conversation);
  }

  // CREATE FIRST CONVERSATION.
  const conversation1 = new Conversation({
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
  await conversation1.save();
  console.log("Conversation 1 saved!");

  const conversation2 = new Conversation({
    name: "App To Do's",
    users: [user1, user3],
    messages: [
      {
        user: user1,
        timestamp: Date.now(),
        message:
          "Hey, this is a conversation test for an interaction between two users.",
      },
      {
        user: user3,
        timestamp: Date.now(),
        message:
          "The two users in this conversation should be test1 and test 3.",
      },
      {
        user: user1,
        timestamp: Date.now(),
        message: "Remember to add timestamps to conversation messages.",
      },
      {
        user: user3,
        timestamp: Date.now(),
        message:
          "and to configure them in a way that is easy for users to undestand.",
      },
      {
        user: user3,
        timestamp: Date.now(),
        message:
          "Also, the conversation should have a picture associated with the conversation.",
      },
      {
        user: user1,
        timestamp: Date.now(),
        message:
          "Maybe we grab the picture from the user who sent the latest message.",
      },
    ],
  });
  await conversation2.save();
  console.log("Conversation 2 saved!");

  mongoose.connection.close();
};

mongooseLoader();
