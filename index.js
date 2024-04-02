import {connectDB} from "./config/database.js";
import express from "express";
import app from "./app.js";
import { config } from "dotenv";
const PORT = 5000;
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
import nodecron from "node-cron"
import { Stats } from "./models/Stats.js";
config({
    path:'./.env',
  });

console.log(cloudinary.config().cloud_name)
connectDB();

cloudinary.config({
   CLOUDINARY_URL:process.env.CLOUDINARY_URL,  
   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
   api_key:process.env.CLOUDINARY_CLIENT_API ,
   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
   secure: true
});
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
nodecron.schedule("0 0 0 1 * * ",async()=>{
  try{
await Stats.create({});
  }catch(error){
  console.log(error);
  }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
