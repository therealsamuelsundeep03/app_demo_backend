"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
const controller = new product_controller_1.ProductController();
/**
 * Public
 */
router.get("/", controller.getProducts);
router.put("/wishList/:id", controller.wishList);
router.put("/cart/:id", controller.cart);
router.delete("/cart", controller.clearCart);
exports.default = router;
