import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", 
    format: async (_req: Express.Request, _file: Express.Multer.File) => "png", 
    public_id: (_req: Express.Request, _file: Express.Multer.File) => Date.now().toString(),
  } as {
    folder: string;
    format: (req: Express.Request, file: Express.Multer.File) => Promise<string> | string;
    public_id: (req: Express.Request, file: Express.Multer.File) => string;
  }, 
});

const upload = multer({ storage });

export { upload, cloudinary };
