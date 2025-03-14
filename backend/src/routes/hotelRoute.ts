import express from "express";
import { createHotel } from "../controller/hotelController";
import authMiddleware from "../middleware/auth";

const router = express.Router();


// Get User Profile (Protected Route)
router.get("/createHotel", authMiddleware,createHotel );

export default router;
