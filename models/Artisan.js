import mongoose from "mongoose";

const ArtisanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  bio: {
    type: String,
    required: true,
  },
  services: {
    type: [String],
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Artisan = mongoose.model("Artisan", ArtisanSchema);
export default Artisan;
