import express from "express";
const router = express.Router({ mergeParams: true });

import { showUsers } from "../controllers/user-controller.js";

router.route("/")
  .get(showUsers);

export default router;
