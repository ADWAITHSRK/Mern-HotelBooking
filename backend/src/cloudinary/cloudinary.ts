import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: "adwaith",
  api_key:"769421232588438",
  api_secret: "dF_MERsbxH7ANu8WiaK2OwmKTuQ",
});

export default cloudinary;
