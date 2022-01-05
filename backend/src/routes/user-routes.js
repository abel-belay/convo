import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";

import { showUsers, createUser, loginUser } from "../controllers/user-controller.js";

router.route("/")
  .get(passport.authenticate("jwt", {session: false}), showUsers)
  .post(createUser)


router.route("/login")
  .post(loginUser)

export default router;
