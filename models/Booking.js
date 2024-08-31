import mongoose, { model } from "mongoose";

const BookingSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  artisan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artisan",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Booking = model("Booking", BookingSchema);
export default Booking;
