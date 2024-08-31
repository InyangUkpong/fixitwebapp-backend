import Booking from "../models/Booking.js";
import moment from "moment";
import Artisan from "../models/Artisan.js";

export const createBooking = async (req, res) => {
  req.body.client = req.user.id;
  try {
    const artisan = await Artisan.findById(req.body.artisan);

    if (!artisan) {
      return res.status(404).json({ message: "Artisan not found" });
    }

    const bookings = await Booking.find({ artisan: req.body.artisan });
    const booked = bookings.findIndex(
      (booking) =>
        moment(req.body.date).format("MMMM Do YYYY, h a") ==
        moment(booking.date).format("MMMM Do YYYY, h a")
    );

    if (booked > -1) {
      return res
        .status(400)
        .json({ message: "Date and Time already occupied for this artisan" });
    }

    const booking = await Booking.create(req.body);

    res.status(201).json({ booking });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllBookingsForClient = async (req, res) => {
  try {
    const bookings = await Booking.find({ client: req.user.id }).populate({
      path: "artisan",
      populate: {
        path: "user",
        model: "User",
        select: "name profile_image",
      },
    });

    res.status(201).json({ bookings });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllBookedDatesOfVendor = async (req, res) => {
  try {
    let bookedDates = await Booking.find({ artisan: req.params.id }).select(
      "date"
    );
    bookedDates = bookedDates.map((booking) => {
      return booking.date;
    });
    res.status(201).json({ bookedDates, artisan: req.params.id });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
};
