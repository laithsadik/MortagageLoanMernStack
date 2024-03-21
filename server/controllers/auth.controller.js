import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { firstname, lastname, phonenumber, email, password } = req.body;

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    firstname,
    lastname,
    phonenumber,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "לא נמצא משתמש כזה"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "סיסמה לא נכונה"));
    }
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);
    res.cookie("access_token", token, { httpOnly: true });
    const { password: pass, ...rest } = validUser._doc;
    res.status(201).json(rest);
  } catch (error) {
    next(error);
  }
};

export const getPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "לא נמצא משתמש כזה"));
    }
    const { password: pass, ...rest } = validUser._doc;
    res.status(201).json(rest);
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req, res, next) => {
  const { email,password } = req.body;
  try {
    const validUser = await User.findOneAndUpdate({ email }, { $set: { password } })
    if (!validUser) {
      return next(errorHandler(404, "לא נמצא משתמש כזה"));
    }
    const { password: pass, ...rest } = validUser._doc;
    res.status(201).json(rest);
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User has been logged out");
  } catch (error) {
    next(error);
  }
};