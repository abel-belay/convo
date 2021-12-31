import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/user.js";

import userRoutes from "../routes/user-routes.js";

const expressLoader = async () => {
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Serving at port ${port}`);
  });

  // SET UP PASSPORT AND CONFIGURE LOCAL AUTHENTICATION AS AUTHENTICATION STRATEGY.
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));

  // CONFIGURE USER SERILIZATION AND DESERIALIZATION (STORING AND REMOVING USER SESSION).
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  // SET EXPRESS API DATA TO JSON
  app.use(express.json());

  // EXPRESS ROUTES
  app.use("/api/users", userRoutes);
};

export default expressLoader;
