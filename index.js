import dotenv from "dotenv";
import express from "express";
import root from "./router/root.js";
import movie from "./router/movie.js";
import cors from "cors";

dotenv.config();

const PORT = process.env.ENV_PORT;
const app = express();
app.use(cors());

app.use("/", root);
app.use("/movie", movie);

app.listen(PORT, () => console.log(`Run server on ${PORT}`));
