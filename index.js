import {connectDB} from "./config/database.js";
import express from "express";
import app from "./app.js";
import { config } from "dotenv";
const PORT = 5000;
import cloudinary from "cloudinary";
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
