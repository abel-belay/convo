const mongoose = require("mongoose");

// THIS SHOULD BE GRABBED FROM .ENV FILE.
const dbUrl = "mongodb://localhost:27017/convo";

const mongooseLoader = async () => {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Open!");
  } catch (error) {
    console.log("Uh oh! An error occured!");
    console.log(error);
  }
};

export default mongooseLoader;
