import dotenv from "dotenv";
import express from "express";
import root from "./router/root";
import movie from "./router/movie";

dotenv.config();

const PORT = 8080;
const app = express();

app.use("/", root);
app.use("/movie", movie);

app.listen(PORT, () => console.log(`Run server on ${PORT}`));
