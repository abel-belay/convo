import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// THIS SHOULD BE GRABBED FROM .ENV FILE.
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/convo";

const mongooseLoader = async () => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Open!");
  } catch (error) {
    console.log("Uh oh! An error occured!", error);
  }
};

export default mongooseLoader;
