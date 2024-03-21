import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user: {
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

const NewMortagage = mongoose.model("NewMortagage", userSchema);

export default NewMortagage;
