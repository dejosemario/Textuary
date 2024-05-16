import express from "express";
import { Express } from "express";
import { errorHandler } from "./middlewares/error.ts";
import generateImageRoute from "./routes/generateImage.route.ts";
import authRoute from "./routes/auth.route.ts";
import morgan from "morgan";
import cors from "cors";
import chatRoute from "./routes/chat.route.ts";
import { isAuthenticated } from "./middlewares/auth.ts";

const app: Express = express();

// Use the express.json() middleware to parse the request body
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/", authRoute);
app.use("/api/v1/", generateImageRoute);
app.use("/api/v1/", chatRoute);

// Error handling
app.use(errorHandler);
app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});

export default app;
