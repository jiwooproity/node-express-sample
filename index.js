import dotenv from "dotenv";
import express from "express";
import root from "./router/root.js";
import movie from "./router/movie.js";

dotenv.config();

const PORT = 8080;
const app = express();

app.use("/", root);
app.use("/movie", movie);

app.listen(PORT, () => console.log(`Run server on ${PORT}`));
