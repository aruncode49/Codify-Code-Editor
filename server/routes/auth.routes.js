import express from "express";
import {
  loginController,
  signupController,
  logoutController,
  getUserController,
} from "../controllers/auth.controllers.js";

import { authenticateUser, isLogin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupController);

router.post("/login", authenticateUser, loginController);

router.get("/logout", logoutController);

router.get("/get-user", isLogin, getUserController);

export default router;
