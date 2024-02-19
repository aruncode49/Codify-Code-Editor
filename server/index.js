import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./db/connect.js";

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello From Codify Server");
});

function startServer() {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server start on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error in server starting: ${error}`);
  }
}

startServer();
