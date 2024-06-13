import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 8080;

app.use("/", (req, res) => {
  res.json({ message: "Hi" });
});

app.use("/movie", (req, res) => {
  res.json({ id: 1, title: "Avengers" });
});

app.listen(PORT, () => console.log(`Run server on ${PORT}`));
