import { ProductModel } from "../../db/models/product.model";
import { UpdateProductDTO } from "./product.types";

export class ProductDB {
  findAllActive() {
    return ProductModel.find({ isActive: true }).lean();
  }

  findByUUID(_id: string) {
    return ProductModel.findOne({ _id }).lean();
  }

  updateByUUID(_id: string, data: UpdateProductDTO) {
    return ProductModel.findOneAndUpdate({ _id }, data, { new: true }).lean();
  }

  deleteCart() {
    return ProductModel.updateMany({}, { $set: { isCart: false } });
  }
}
