import express from "express"; // im importing express
import { register, login } from "../controllers/authController.js"; // Named imports
import { validationMiddleware } from "../middleware/validation.js";
import {
  registerValidation,
  loginValidation,
} from "../validations/auth.validation.js";

const router = express.Router();

router.post("/register", validationMiddleware(registerValidation), register);
router.post("/login", validationMiddleware(loginValidation), login);

export default router;
