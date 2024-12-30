import { validationResult } from "express-validator";

import Captain from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
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

export { registerCaptain };
