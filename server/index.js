import express, { json } from "express";
const app = express();
import cors from "cors";

// middleware
app.use(cors());
app.use(json());
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`L'application tourne sur ${port}`)
})