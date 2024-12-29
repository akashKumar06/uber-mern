import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import User from "../models/user.model.js";
async function register(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password,
  });
  const token = user.generateAuthToken();
  return res.status(201).cookie("token", token).json({
    token,
    user,
  });
}

async function login(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });

    const token = user.generateAuthToken();
    if (!token) throw new Error({ message: "Token generation failed" });

    return res
      .status(200)
      .cookie("token", token)
      .json({ success: true, token, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
}

export { register, login };
