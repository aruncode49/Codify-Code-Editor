import express from "express";
import { isLogin } from "../middlewares/auth.middleware.js";
import {
  deleteCodeController,
  editCodeController,
  getFullCodeController,
  getSavedCodeController,
  saveCodeController,
} from "../controllers/code.controllers.js";

const router = express.Router();

router.post("/save", isLogin, saveCodeController);

router.put("/edit/:codeId", isLogin, editCodeController);

router.delete("/delete/:codeId", isLogin, deleteCodeController);

router.get("/load/:codeId", isLogin, getFullCodeController);

router.get("/saved", isLogin, getSavedCodeController);

export default router;
