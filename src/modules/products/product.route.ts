import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();
const controller = new ProductController();

/**
 * Public
 */
router.get("/", controller.getProducts);
router.put("/wishList/:id", controller.wishList);
router.put("/cart/:id", controller.cart);
router.delete("/cart", controller.clearCart);

export default router;
