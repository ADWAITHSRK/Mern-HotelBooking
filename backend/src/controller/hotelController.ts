import { Request,Response } from "express";
import Hotel from "../models/hotel";

export const createHotel = async (req:Request,res:Response) :Promise<any> => {
    try{
        const {name,city,country,description,type,adultCount,childCount,facilities,pricePerNight,starRating } = req.body

        if (! req.files || !Array.isArray(req.files)) {
            return res.status(400).json({message:"Image Files are Required"})
        }
        const imageUrls = ( req.files as Express.Multer.File[] ).map((file)=>file.path)
        const newHotel = new Hotel ({
            userId:req.userId,
            name,
            city,
            country,
            description,
            type,
            adultCount,
            childCount,
            facilities,
            pricePerNight,
            starRating,
            imageUrls,
            lastUpdated:new Date(),
        })

        await newHotel.save();
        res.status(201).json({message :"Hotel Created SuccesFully",hotel:newHotel})
    }
    catch(error){
        console.error("Error creating hotel:", error);
    res.status(500).json({ message: "Internal Server Error" });
    }
}
