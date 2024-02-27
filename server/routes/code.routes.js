import express from "express";
import { isLogin } from "../middlewares/auth.middleware.js";
import { saveCodeController } from "../controllers/code.controllers.js";

const router = express.Router();

router.post("/save", isLogin, saveCodeController);

export default router;
