import express from "express"; // im importing express
import { validationMiddleware } from "../middleware/validation.js";
import { createArtisanValidation } from "../validations/artisan.validation.js";
import {
  createArtisan,
  getAllArtisans,
} from "../controllers/artisanController.js";
import { authenticate, restrictTo } from "../middleware/authenticate.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  restrictTo("artisan"),
  validationMiddleware(createArtisanValidation),
  createArtisan
);

router.get("/", getAllArtisans);

export default router;
