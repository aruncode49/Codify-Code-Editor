import express from "express";
import { isLogin } from "../middlewares/auth.middleware.js";
import {
  getFullCodeController,
  saveCodeController,
} from "../controllers/code.controllers.js";

const router = express.Router();

router.post("/save", isLogin, saveCodeController);

router.post("/get-code/", isLogin, getFullCodeController);

export default router;
