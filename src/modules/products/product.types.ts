export interface Product {
  uuid: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  category: string;
  images: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  isWishlist: boolean;
  isCart: boolean;
}
export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  images?: string[];
  isActive?: boolean;
  isWishList?: boolean;
  isCart?: boolean;
}
