import express from 'express';

import { errorHandler } from "./middlewares/error.ts";



const app = express();
const port = 3000;

// Use the express.json() middleware to parse the request body
app.use(express.json());
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send(`Welcome to the home page`);
  });



app.all("*", (req, res) => {
    res.send(`Page doesn't exit, Kindly navigate to the accurate route`);
  });

  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;