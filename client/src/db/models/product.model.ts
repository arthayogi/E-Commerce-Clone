import { error } from "console";
import { getDatabase } from "../config/mongodb";
import { TProduct } from "../types";

export class Product {
    static async findAll() {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TProduct>("products")

        const products = await collection.find().toArray()

        return products
    }

    static async findBySlug(slug : string) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TProduct>("products")

        return await collection.findOne({slug})
    }
}