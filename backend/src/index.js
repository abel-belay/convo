import mongooseLoader from "./loaders/mongoose.js";

const startServer = async () => {
  await mongooseLoader();
};

startServer();
