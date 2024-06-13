import express from "express";
import dotenv from "dotenv";

import root from "./router/root";
import movie from "./router/movie";

dotenv.config();
const app = express();
const PORT = 8080;

app.use("/", root);
app.use("/movie", movie);
app.listen(PORT, () => console.log(`Run server on ${PORT}`));
