import app from "./app.ts";
import dotenv from "dotenv";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
