import { ObjectId } from "mongodb";

export type TProduct = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type TUser = {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TWishlist = {
  userId: ObjectId
  productId: ObjectId
  createdAt: Date
  updatedAt: Date
  product?: TProduct
}
