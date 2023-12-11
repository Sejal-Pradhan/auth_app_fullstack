import express from "express";
import {
  signup,
  signin,
  google,
  signout,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/Sign-up", signup);
router.post("/Sign-in", signin);
router.post("/google", google);
router.get("/Sign-out", signout);

export default router;
