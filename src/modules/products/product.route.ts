import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();
const controller = new ProductController();

/**
 * Public
 */
router.get("/", controller.getProducts);
// router.get("/slug/:slug", controller.getProductBySlug);

/**
 * Admin / Internal
 */
router.post("/", controller.createProduct);
// router.get("/uuid/:uuid", controller.getProductByUUID);
// router.put("/uuid/:uuid", controller.updateProduct);
// router.delete("/uuid/:uuid", controller.deleteProduct);

export default router;
