import { apiSlice } from "./apiSlice";

const HOTEL_URL = import.meta.env.VITE_HOTEL_URL;

export interface HotelData {
  name: string;
  city: string;
  type: string;
  country?: string;
  description: string;
  adultCount: number;
  childCount: number;
  facilities: string[];
  pricePerNight: number;
  starRating: number;
  imageFiles: File[]; 
}

export const hotelApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createHotel: builder.mutation<any, FormData>({
      query: (hotelData) => ({
        url: `${HOTEL_URL}/createhotel`,
        method: "POST",
        body: hotelData,
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateHotelMutation } = hotelApiSlice;
