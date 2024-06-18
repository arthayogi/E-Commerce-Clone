import { ObjectId } from "mongodb";
import { getDatabase } from "../config/mongodb";
import { TWishlist } from "../types";

export class Wishlist {

    static async findAllByUserId(_id: string | ObjectId) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TWishlist>("wishlist")

        if(typeof _id === "string") {
            _id = new ObjectId(_id)
        }

        const wishlist = await collection
        .aggregate([
          {
            $lookup: {
              from: "products",
              localField: "productId",
              foreignField: "_id",
              as: "product",
            },
          },
          {
            $unwind: {
              path: "$product",
              preserveNullAndEmptyArrays: false,
            },
          },
          {
            $match: {
              userId: _id,
            },
          },
        ])
        .toArray();
  
      return wishlist;
    }

    static async findById(_id: string | ObjectId) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TWishlist>("wishlist")

        if (typeof _id === "string") {
            _id = new ObjectId(_id);
          }

        return await collection.findOne({ _id })
    }

    static async create(wishlist: Partial<TWishlist>) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TWishlist>("wishlist")

        const { insertedId } = await collection.insertOne(wishlist as TWishlist)

        return this.findById(insertedId)
    }
}