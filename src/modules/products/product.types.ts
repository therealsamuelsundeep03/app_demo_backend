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
}

export interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  category: string;
  images?: string[];
}

export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  images?: string[];
  isActive?: boolean;
}
