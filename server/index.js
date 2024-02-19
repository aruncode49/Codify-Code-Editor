import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";

import { connectDB } from "./db/connect.js";
import { User } from "./models/user.model.js";
import { Code } from "./models/code.model.js";

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

// initialize passport and use passport session (** NOTE -> express-session is must for using passport local strategy)
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
  res.send("Hello From Codify Server");
});

app.get("/demo-code", async (req, res) => {
  const fakeCode = new Code({
    code: {
      html: `<h1>Hello World</h1>`,
      css: `h1: {color: "red"}`,
      javascript: `console.log("Hello world")`,
    },
    owner: "65d32d1090bfb01d7af5caeb",
  });

  const insertedCode = await fakeCode.save();

  res.send(insertedCode);
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
