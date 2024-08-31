import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI;

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
      console.error(err);
      process.exit(1);
    });
};

export default connectDB;
