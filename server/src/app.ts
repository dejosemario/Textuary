import express from "express";
import { Express } from "express";
import { errorHandler } from "./middlewares/error.ts";
import generateImageRoute from "./routes/generateImage.route.ts";
import authRoute from "./routes/auth.route.ts";
import { generateImage } from "./controllers/generate.controller.ts";

const app: Express = express();

// Use the express.json() middleware to parse the request body
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/", generateImageRoute);
app.use("/api/v1/", authRoute);

app.get("/", (req, res) => {
  res.send(`Welcome to the home page`);
});

app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});

export default app;
