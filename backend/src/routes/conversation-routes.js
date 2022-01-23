import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";
import {
  showConversations,
  addMessage,
  createConversation,
  getConversation,
} from "../controllers/conversation-controller.js";

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), showConversations);

router
  .route("/new")
  .post(passport.authenticate("jwt", { session: false }), createConversation);

router.route("/:conversationId").get(passport.authenticate("jwt", { session: false }), getConversation);

router.route("/:conversationId/messages").post(passport.authenticate("jwt", { session: false }), addMessage);

export default router;
