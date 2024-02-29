import express from "express";
import { isLogin } from "../middlewares/auth.middleware.js";
import {
  getFullCodeController,
  getMyCodeController,
  saveCodeController,
} from "../controllers/code.controllers.js";

const router = express.Router();

router.post("/save", isLogin, saveCodeController);

router.get("/load/:codeId", isLogin, getFullCodeController);

router.get("/my-code", isLogin, getMyCodeController);

export default router;
