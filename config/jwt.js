import jwt from "jsonwebtoken";

export const createToken = (id, role, expires) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: expires,
  });
};

export const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) return reject(err);

      resolve(payload);
    });
  });
};
