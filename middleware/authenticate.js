import User from "../models/User.js";
import { verifyToken } from "../config/jwt.js";

export const authenticate = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }

  let accessToken = bearer.split("Bearer ")[1].trim();
  try {
    const accessPayload = await verifyToken(accessToken);

    const user = await User.findOne(
      { _id: accessPayload.id },
      { __v: 0, password: 0 }
    );

    if (!user) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    user.password = undefined;
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};

export function restrictTo(...roles) {
  return (req, res, next) => {
    if (!req.user) return res.status(403).json({ message: "Forbidden Access" });

    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden Access" });

    next();
  };
}
