import express from "express";
import { Express } from "express";
import { errorHandler } from "./middlewares/error.ts";

const app: Express = express();

// Use the express.json() middleware to parse the request body
app.use(express.json());
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send(`Welcome to the home page`);
});

app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});

export default app;
