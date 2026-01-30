import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { asyncHandler } from "../../utils/asyncHandler";
import { respond } from "../../utils/respond";

export class ProductController {
  private service: ProductService;

  constructor(service?: ProductService) {
    this.service = service ?? new ProductService();
  }

  getProducts = asyncHandler(async (_req: Request, res: Response) => {
    const products = await this.service.getActiveProducts();
    respond(res, products);
  });

  wishList = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    if (Array.isArray(id)) {
      throw new Error("Invalid product id");
    }
    const product = await this.service.wishList(id);
    respond(res, product);
  });

  cart = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    if (Array.isArray(id)) {
      throw new Error("Invalid product id");
    }
    const product = await this.service.cart(id);
    respond(res, product);
  });

  clearCart = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await this.service.clearCart();
    respond(res, product);
  });
}
