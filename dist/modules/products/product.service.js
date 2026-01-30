"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_db_1 = require("./product.db");
const appError_1 = require("../../utils/appError");
class ProductService {
    constructor() {
        this.db = new product_db_1.ProductDB();
    }
    async getActiveProducts() {
        const product = await this.db.findAllActive();
        if (!product) {
            throw new appError_1.AppError("Product not found", 404);
        }
        return product;
    }
    async wishList(id) {
        let product = await this.db.findByUUID(id);
        if (product) {
            product = await this.db.updateByUUID(id, { isWishList: !product.isWishList });
        }
        return product;
    }
    async cart(id) {
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
exports.ProductService = ProductService;
