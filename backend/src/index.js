import express from "express";
import dotenv from "dotenv"
import path from "path";
import {connectDB} from "./lib/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth_route.js";
import messageRoutes from "./routes/message_route.js";
import { app, server} from "./lib/socket.js";


dotenv.config();


const PORT = process.env.PORT;
const __dirname = path.resolve();

// Increase payload limits for image uploads
app.use(express.json({ limit: '10mb' })); // Allow up to 10MB JSON payloads
app.use(express.urlencoded({ limit: '10mb', extended: true })); // Allow up to 10MB URL-encoded data
app.use(cookieParser());
app.use(cors({
  origin: process.env.NODE_ENV === "production" ? process.env.CLIENT_URL : "http://localhost:5173",
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on port:",PORT);
  connectDB();
});




