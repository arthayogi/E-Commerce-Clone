import { ObjectId } from "mongodb";
import { getDatabase } from "../config/mongodb";
import { TUser } from "../types";
import { hashPassword } from "@/helpers/bcryptjs";

export class User {

    static async findById(_id: string | ObjectId) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TUser>("users")

        if (typeof _id === "string") {
            _id = new ObjectId(_id);
          }

        return await collection.findOne({ _id })
    }

    static async findByEmail(email: string) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TUser>("users")

        return await collection.findOne({ email })
    }

    static async register(user: TUser) {
        const client = await getDatabase()
        const collection = client.db("gc02-db").collection<TUser>("users")

        return await collection.insertOne(user)
    }
}