import express from "express";
const app = express();
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
import passportLoader from "./passport.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "../routes/user-routes.js";

const expressLoader = async () => {
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Serving at port ${port}`);
  });

  // SET UP CORS.
  const corsOptions = {
    origin: true,
    credentials: true,
  }
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

  // EXPRESS ROUTES
  app.use("/users", userRoutes);
};

export default expressLoader;
