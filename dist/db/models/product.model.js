"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
const productSchema = new mongoose_1.Schema({
    _id: { type: String, default: () => (0, crypto_1.randomUUID)() },
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
}, {
    timestamps: true
});
exports.ProductModel = (0, mongoose_1.model)("product", productSchema);
