import express from "express";
import {
  getCaptain,
  loginCaptain,
  logout,
  registerCaptain,
} from "../controllers/captain.controller.js";
import { body } from "express-validator";
import { authCaptain } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capcity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  registerCaptain
);

router.post(
  "/login",
  [body("email").isEmail().withMessage("Invalid email")],
  loginCaptain
);

router.get("/profile", authCaptain, getCaptain);
router.get("/logout", authCaptain, logout);
export default router;
