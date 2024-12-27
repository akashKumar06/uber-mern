import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
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
export { register };
