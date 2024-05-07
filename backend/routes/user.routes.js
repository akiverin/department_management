import express from "express";

import { protectRoute } from "../meddleware/protectRoute.js";
import {
  getUserProfile,
  updateUser,
  getAllUsers,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);
router.get("/all", protectRoute, getAllUsers);
router.post("/update", protectRoute, updateUser);

export default router;
