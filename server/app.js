import express, { json } from "express";
import cors from "cors";
import indexRoute from "./routes/index.routes.js";
import errorHandler from "./middleware/error.middleware.js";

export const app = express(); // Create our Express Application Object
const PORT = 3000;
const BASE_URL = "/api/v1";
app.use(cors());
app.use(json()); // middleware for parsing incoming json data
app.use(BASE_URL, indexRoute); // /api/v1
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is live!`);
});
