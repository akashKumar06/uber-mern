import { validationResult } from "express-validator";
import Captain from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import BlackListToken from "../models/blackListToken.model.js";

async function registerCaptain(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;
    const isCaptainAlreadyExist = await Captain.findOne({ email });
    if (isCaptainAlreadyExist) throw new Error("Captain already exists");
    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();
    return res.status(201).json({
      success: true,
      token,
      captain,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,

      message: error.message,
    });
  }
}

async function loginCaptain(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    if (!email || !password) throw new Error("All fields are required.");

    const captain = await Captain.findOne({ email }).select("+password");
    if (!captain)
      return res.status(401).json({
        message: "Invalid email or password",
      });

    const isMatch = await captain.comparePassword(password);

    if (!isMatch)
      return res.status(401).json({
        message: "Invalid email or password",
      });

    const token = captain.generateAuthToken();
    return res.status(200).cookie("token", token).json({
      success: true,
      message: "User logged in successfully",
      token,
      captain,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getCaptain(req, res, next) {
  try {
    return res.status(200).json({ success: true, captain: req.captain });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

async function logout(req, res, next) {
  try {
    const token =
      req?.cookies?.token || req?.headers?.authorization?.split(" ")[1];
    await BlackListToken.create({ token });

    return res
      .status(200)
      .clearCookie("token")
      .json({ success: false, message: "Captain logged out successfully." });
  } catch (error) {}
}
export { registerCaptain, loginCaptain, getCaptain, logout };
