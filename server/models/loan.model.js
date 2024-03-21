import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    interest: {
      type: String,
      required: true,
    },
    banks: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    international: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Loan = mongoose.model("Loan", userSchema);

export default Loan;
