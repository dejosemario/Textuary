import express from "express";
import { Express } from "express";
import { errorHandler } from "./middlewares/error.ts";
import postRoute from "./routes/post.route.ts";
import authRoute from "./routes/auth.route.ts";
import morgan from "morgan";
import cors from "cors";

const app: Express = express();

// Use the express.json() middleware to parse the request body
const corsOptions = {
  origin: "process.env.CLIENT_URL",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/", postRoute);
app.use("/api/v1/", authRoute);
app.use(errorHandler);

app.all("*", (req, res) => {
  res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
});

export default app;
