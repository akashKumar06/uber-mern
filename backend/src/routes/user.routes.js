import express from "express";
import { body } from "express-validator";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = express.Router();

// express-validator here on routes only check for the values we process it in the controller using validation Result
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("firstname must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  register
);

router.post(
  "/login",
  [body("email").isEmail().withMessage("Invalid email")],
  login
);

router.get("/profile", verifyJWT, getProfile);
router.get("/logout", verifyJWT, logout);
export default router;
