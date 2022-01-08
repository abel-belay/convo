import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";
import {showConversations} from "../controllers/conversation-controller.js";

router.route("/")
  // NEED TO ADD PASSPORT AUTHENTICATION TO ROUTE.
  .get(showConversations);

export default router;