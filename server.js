dotenv.config();
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import artisanRoutes from "./routes/artisan.js";
import bookingRoutes from "./routes/booking.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/artisans", artisanRoutes);
app.use("/api/booking", bookingRoutes);

// Database connection
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

connectDB(MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
