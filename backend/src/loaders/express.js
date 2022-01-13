import express from "express";
const app = express();
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
import passportLoader from "./passport.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userRoutes from "../routes/user-routes.js";
import conversationRoutes from "../routes/conversation-routes.js";

const expressLoader = async () => {
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Serving at port ${port}`);
  });

  // SET UP CORS.
  const corsOptions = {
    origin: true,
    credentials: true,
  };
  app.use(cors(corsOptions));

  // SET UP EXPRESS SESSIONS.
  const sessionOptions = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  };
  app.use(session(sessionOptions));

  // SET EXPRESS API TO PARSE JSON DATA.
  app.use(express.json());

  // SET UP COOKIE PARSER
  app.use(cookieParser());

  // SETS UP PASSPORT AS AUTHENTICATION MIDDLEWARE.
  passportLoader(app);

  // SERVER STATIC FILES FORM THE REACT APP.
  app.use(express.static(path.join(__dirname, "../../../frontend/build")));

  // EXPRESS ROUTES
  app.use("/api/users/:userId/conversations", conversationRoutes);

  app.use("/api/users", userRoutes);

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../frontend/build/index.html"));
  });
};

export default expressLoader;
