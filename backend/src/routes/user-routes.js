import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";

import { showUsers, createUser, loginUser } from "../controllers/user-controller.js";

router.route("/")
  .get(showUsers)
  .post(createUser)

router.route("/login")
  .post(passport.authenticate("local"),loginUser)

export default router;
