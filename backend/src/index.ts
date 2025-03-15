

import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import connectDB from "./config/db"; 
import userRoutes from './routes/userRoute'
import hotelRoute from './routes/hotelRoute'
const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true,
};


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is healthy" });
  });
  
  connectDB();
  
  const PORT = process.env.PORT || 7000;

  app.use(express.static(path.join(__dirname,"../../frontend/dist")))
  app.use("/api/user",userRoutes)
  app.use("/api/hotel",hotelRoute)



  app.listen(PORT,()=>{
    console.log(`Server Running On Port ${PORT}`)
  })