import { ProductModel } from "../../infrastructure/db/models/product.model";
import { CreateProductDTO, UpdateProductDTO } from "./product.types";

export class ProductDB {
  create(data: CreateProductDTO & { slug: string }) {
    return ProductModel.create(data);
  }

  findAllActive() {
    return ProductModel.find({ isActive: true }).lean();
  }

  findByUUID(uuid: string) {
    return ProductModel.findOne({ _id: uuid }).lean();
  }

  findBySlug(slug: string) {
    return ProductModel.findOne({ slug, isActive: true }).lean();
  }

  updateByUUID(uuid: string, data: UpdateProductDTO) {
    return ProductModel.findOneAndUpdate({ uuid }, data, { new: true }).lean();
  }

  deleteByUUID(uuid: string) {
    return ProductModel.findOneAndDelete({ uuid });
  }

  countBySlugPrefix(slug: string) {
    return ProductModel.countDocuments({
      slug: { $regex: `^${slug}` }
    });
  }
}
