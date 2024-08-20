import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    credentials: true, // This allows cookies to be sent/received
  })
);

const uri =
  "mongodb+srv://ruth85:Mongo1234@personalfinancetracker.deyvdxm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    const dbName = "amazon-shop";
    const collectionName = "products";
    const database = client.db(dbName);
    const productsCollection = database.collection(collectionName);

    app.get("/", (req, res) => {
      res.send(
        "<h1>Welcome to the Amazon Shop API</h1><p>Use <code>/products</code> to get the list of products.</p>"
      );
    });

    // Define the route after connecting to the database
    app.get("/products", async (req, res) => {
      try {
        const products = await productsCollection.find({}).toArray();
        res.json(products);
      } catch (error) {
        res.status(500).send("Error fetching products");
        console.error("Failed to connect to the database", error);
      }
    });
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
}

connectToDatabase().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
