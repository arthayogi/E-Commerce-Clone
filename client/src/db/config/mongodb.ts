import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI!;

if(!uri) {
  throw new Error("MongoDB URI missing!")
}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let client: MongoClient;

export async function getDatabase() {
  try {
    if (!client) {
      client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        },
      });
      await client.connect();
    }
    return client;
  } finally {
  }
}
