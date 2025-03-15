import express from "express";
import { createHotel } from "../controller/hotelController";
import {upload,uploadToCloudinary} from "../middleware/multer"
const router = express.Router();


// Get User Profile (Protected Route)
router.post("/createhotel", upload.array("images", 5),uploadToCloudinary, createHotel);

export default router;
