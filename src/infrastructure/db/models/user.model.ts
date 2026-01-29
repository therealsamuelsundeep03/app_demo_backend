import { randomUUID } from "crypto";
import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, default: () => randomUUID() },
    name: { type: String, trim: true },
    phone: { type: String, required: true, unique: true, index: true },
    otp: { type: Number, select: false },
    isBlocked: { type: Boolean, default: false },
    lastLogin: { type: Date }
  },
  { timestamps: true }
);

export const UserModel = model("User", userSchema);
