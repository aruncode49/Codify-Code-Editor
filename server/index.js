import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import localStrategy from "passport-local";
import session from "express-session";

import { connectDB } from "./db/connect.js";
import { User } from "./models/user.model.js";

dotenv.config();

const app = express();
const PORT = 8080;

// session options
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOptions));

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
