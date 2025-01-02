import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import BlackListToken from "../models/blackListToken.model.js";
import Captain from "../models/captain.model.js";
async function verifyJWT(req, res, next) {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.split(" ")[1];
    if (!token)
      return res
        .status(400)
        .json({ success: false, message: "Token not found" });

    const isBlackListed = await BlackListToken.findOne({ token });
    if (isBlackListed)
      return res.status(401).json({ success: false, message: "unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
}

async function authCaptain(req, res, next) {
  try {
    const token =
      req?.cookies?.token || req?.headers?.authorization?.split(" ")[1];
    if (!token)
      return res
        .status(400)
        .json({ success: false, message: "Token not found" });

    const isBlackListToken = await BlackListToken.findOne({ token });
    if (isBlackListToken)
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await Captain.findById(decoded.id);
    if (!captain)
      return res
        .status(404)
        .json({ success: false, message: "Captain not found" });

    req.captain = captain;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export { verifyJWT, authCaptain };
