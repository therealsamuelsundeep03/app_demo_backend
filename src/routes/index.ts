import { Express } from "express";

import productRoutes from "../modules/products/product.route";

export function registerRoutes(app: Express) {
  app.use("/api/products", productRoutes);
}
