"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const asyncHandler_1 = require("../../utils/asyncHandler");
const respond_1 = require("../../utils/respond");
class ProductController {
    constructor(service) {
        this.getProducts = (0, asyncHandler_1.asyncHandler)(async (_req, res) => {
            const products = await this.service.getActiveProducts();
            (0, respond_1.respond)(res, products);
        });
        this.wishList = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
            const { id } = req.params;
            if (Array.isArray(id)) {
                throw new Error("Invalid product id");
            }
            const product = await this.service.wishList(id);
            (0, respond_1.respond)(res, product);
        });
        this.cart = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
            const { id } = req.params;
            if (Array.isArray(id)) {
                throw new Error("Invalid product id");
            }
            const product = await this.service.cart(id);
            (0, respond_1.respond)(res, product);
        });
        this.clearCart = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
            const { id } = req.params;
            const product = await this.service.clearCart();
            (0, respond_1.respond)(res, product);
        });
        this.service = service ?? new product_service_1.ProductService();
    }
}
exports.ProductController = ProductController;
