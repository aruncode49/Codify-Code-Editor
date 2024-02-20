import express from "express";
import passport from "passport";
import {
  loginController,
  signupController,
  logoutController,
} from "../controllers/auth.controllers.js";

import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupController);

router.post("/login", authenticateUser, loginController);

router.post("/logout", logoutController);

export default router;
