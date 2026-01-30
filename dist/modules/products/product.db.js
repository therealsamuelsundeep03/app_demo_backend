"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDB = void 0;
const product_model_1 = require("../../db/models/product.model");
class ProductDB {
    findAllActive() {
        return product_model_1.ProductModel.find({ isActive: true }).lean();
    }
    findByUUID(_id) {
        return product_model_1.ProductModel.findOne({ _id }).lean();
    }
    updateByUUID(_id, data) {
        return product_model_1.ProductModel.findOneAndUpdate({ _id }, data, { new: true }).lean();
    }
    deleteCart() {
        return product_model_1.ProductModel.updateMany({}, { $set: { isCart: false } });
    }
}
exports.ProductDB = ProductDB;
