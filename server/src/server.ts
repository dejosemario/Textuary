import app from "./app.ts";
import dotenv from "dotenv";
import connectDB  from "./config/db.ts";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI ?? "";


connectDB(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.log("Error connecting to the database", error);
    process.exit(1);
  });
