import { Schema, model, Types } from "mongoose";
import { randomUUID } from "crypto";

const productSchema = new Schema(
  {
    _id: { type: String, default: () => randomUUID() },
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, ref: "Category", required: true },
    images: { type: [String], default: [] },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isWishList: { type: Boolean, default: false },
    isCart: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

export const ProductModel = model("product", productSchema);
