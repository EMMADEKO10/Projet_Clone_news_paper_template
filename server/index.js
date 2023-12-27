import express, { json } from "express";
const app = express();
import cors from "cors";

// middleware
app.use(cors());
app.use(json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenue dans mon blog!')
})


app.get("/articles", async (req, res) => {
    try {
      // Utilisez "import()" avec l'option "assertion" pour importer le JSON
      const data = await import("../api/blogsData.json", { assert: { type: 'json' } });
      res.send(data);
    } catch (error) {
      console.error("Error reading JSON file:", error);
      res.status(500).send("Internal Server Error");
    }
  });



app.listen(port, () => {
  console.log(`L'application tourne sur ${port}`)
})