import express from "express";
import { registerUser, loginUser, logout, getUserProfile } from "../controller/userController";
import authMiddleware from "../middleware/auth";

const router = express.Router();

// User Registration
router.post("/register", registerUser);

// User Login
router.post("/login", loginUser);

// User Logout
router.post("/logout", logout);

// Get User Profile (Protected Route)
router.get("/profile", authMiddleware, getUserProfile);

export default router;
