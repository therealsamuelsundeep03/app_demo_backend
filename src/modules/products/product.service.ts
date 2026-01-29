import slugify from "slugify";
import { ProductDB } from "./product.db";
import { CreateProductDTO } from "./product.types";
import { AppError } from "../../utils/appError";

export class ProductService {
  private db = new ProductDB();

  async createProduct(data: CreateProductDTO) {
    const baseSlug = slugify(data.name, {
      lower: true,
      strict: true
    });

    const count = await this.db.countBySlugPrefix(baseSlug);

    const slug = count === 0 ? baseSlug : `${baseSlug}-${count}`;

    try {
      return await this.db.create({ ...data, slug });
    } catch (err: any) {
      // Absolute safety net (race condition protection)
      if (err.code === 11000) {
        throw new AppError("Slug collision, try again", 409);
      }
      throw err;
    }
  }

  async getProductByUUID(uuid: any) {
    const product = await this.db.findByUUID(uuid);
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    return product;
  }

  async getActiveProducts() {
    const product = await this.db.findAllActive();
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    return product;
  }
}
