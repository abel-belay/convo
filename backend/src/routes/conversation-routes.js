import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";
import { showConversations, addMessage } from "../controllers/conversation-controller.js";

router.route("/")
  .get(passport.authenticate("jwt", {session: false}), showConversations);

router.route("/:conversationId/messages")
  .post(addMessage);

export default router;
