import express from "express"; // im importing express
import { validationMiddleware } from "../middleware/validation.js";
import { createBookingValidation } from "../validations/booking.validation.js";
import {
  createBooking,
  getAllBookingsForClient,
  getAllBookedDatesOfVendor,
} from "../controllers/bookingController.js";
import { authenticate, restrictTo } from "../middleware/authenticate.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  restrictTo("client"),
  validationMiddleware(createBookingValidation),
  createBooking
);

router.get("/vendor-booked-dates/:id", authenticate, getAllBookedDatesOfVendor);

router.get(
  "/client-bookings",
  authenticate,
  restrictTo("client"),
  getAllBookingsForClient
);

export default router;
