import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { asyncHandler } from "../../utils/asyncHandler";
import { respond } from "../../utils/respond";

export class ProductController {
  private service: ProductService;

  constructor(service?: ProductService) {
    this.service = service ?? new ProductService();
  }

  createProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.service.createProduct(req.body);
    respond(res, product, 201);
  });

  getProducts = asyncHandler(async (_req: Request, res: Response) => {
    const products = await this.service.getActiveProducts();
    respond(res, products);
  });

  getProductByUUID = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.service.getProductByUUID(req.params.uuid);
    respond(res, product);
  });

  //   getProductBySlug = asyncHandler(async (req: Request, res: Response) => {
  //     const product = await this.service.getProductBySlug(req.params.slug);
  //     respond(res, product);
  //   });
}
