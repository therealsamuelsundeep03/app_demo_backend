import { ProductDB } from "./product.db";
import { AppError } from "../../utils/appError";

export class ProductService {
  private db = new ProductDB();

  async getActiveProducts() {
    const product = await this.db.findAllActive();
    if (!product) {
      throw new AppError("Product not found", 404);
    }
    return product;
  }

  async wishList(id: string) {
    let product = await this.db.findByUUID(id);
    if (product) {
      product = await this.db.updateByUUID(id, { isWishList: !product.isWishList });
    }
    return product;
  }

  async cart(id: string) {
    let product = await this.db.findByUUID(id);
    if (product) {
      product = await this.db.updateByUUID(id, { isCart: !product.isCart });
    }
    return product;
  }

  async clearCart() {
    return await this.db.deleteCart();
  }
}
