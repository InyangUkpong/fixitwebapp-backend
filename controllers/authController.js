import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { createToken } from "../config/jwt.js";

export async function register(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User(req.body);

    await newUser.save();

    const token = createToken(newUser.id, req.body.role, 3600);

    newUser.password = undefined;
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      //take note of the error message and error code
      return res.status(401).json({ msg: "Email or Password is incorrect" });
    }

    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      //you should return 401 and not 400
      //take note of the error message and error code
      return res.status(401).json({ msg: "Email or Password is incorrect" });
    }

    const token = createToken(user.id, user.role, 3600);

    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}
