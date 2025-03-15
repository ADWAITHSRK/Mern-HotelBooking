import mongoose from "mongoose";

export type hotelType = {
  _id: string;

  userId: string;

  name: string;

  city: string;

  country: string;

  description: string;

  type: string;

  adultCount: number;

  childCount: number;

  facilities: string[];

  pricePerNight: number;

  starRating: number;

  imageUrls: string[];

  lastUpdated: Date;
};

const hotelSchema = new mongoose.Schema<hotelType>({
  userId: { type: String },
  name: { type: String },
  city: { type: String},

  country: { type: String},

  description: { type: String},

  type: { type: String},

  adultCount: { type: Number },

  childCount: { type: Number},

  facilities: [{ type: String}],

  pricePerNight: { type: Number },

  starRating: { type: Number, min: 1, max: 5 },

  imageUrls: [{ type: String}],

  lastUpdated: { type: Date },
});

const Hotel = mongoose.model<hotelType>("Hotel",hotelSchema)
export default Hotel;