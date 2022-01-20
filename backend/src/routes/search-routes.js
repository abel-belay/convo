import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";

import { getSearchResults } from "../controllers/search-controller.js";

router.route("/")
  .get(passport.authenticate("jwt", {session: false}), getSearchResults)

export default router;