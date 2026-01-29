import { Express } from "express";

import productRoutes from "../modules/products/product.route";
import userRoutes from "../modules/users/user.route";

export function registerRoutes(app: Express) {
  app.use("/api/products", productRoutes);
  app.use("/api/user", userRoutes);
}
