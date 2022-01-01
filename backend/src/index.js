import mongooseLoader from "./loaders/mongoose.js";
import expressLoader from "./loaders/express.js";

const startServer = async () => {
  await mongooseLoader();
  await expressLoader();
};

startServer();
