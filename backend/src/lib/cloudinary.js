import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

// Ensure dotenv is loaded
dotenv.config();

// Debug: Check if environment variables are loaded
console.log("Cloudinary Config Check:");
console.log("CLOUD_NAME:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API_KEY:", process.env.CLOUDINARY_API_KEY ? "✓ Loaded" : "✗ Missing");
console.log("API_SECRET:", process.env.CLOUDINARY_API_SECRET ? "✓ Loaded" : "✗ Missing");
console.log("All env vars:", Object.keys(process.env).filter(key => key.startsWith('CLOUDINARY')));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;