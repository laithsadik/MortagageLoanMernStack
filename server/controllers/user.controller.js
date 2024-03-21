import NewMortagage from "../models/newmortagage.model.js";
import Loan from "../models/loan.model.js";

export const test = (req, res) => {
  res.json({ message: "success" });
};

export const newMortagage = async (req, res, next) => {
  const { banks, international, user, slideValue } = req.body;
  const newUser = new NewMortagage({
    banks,
    international,
    user,
    amount: slideValue,
  });
  try {
    await newUser.save();
    res.status(201).json("New mrtagage created successfully!");
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};

export const loan = async (req, res, next) => {
  const { banks, international, interest, slideValue } = req.body;
  const newUser = new Loan({
    banks,
    international,
    interest,
    amount: slideValue,
  });
  try {
    await newUser.save();
    res.status(201).json("New mrtagage created successfully!");
  } catch (error) {
    next(errorHandler(500, error.message));
  }
};
