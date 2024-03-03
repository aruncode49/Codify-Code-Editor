import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";
import MongoStore from "connect-mongo";

import { connectDB } from "./db/connect.js";
import { User } from "./models/user.model.js";

dotenv.config();

const app = express();
const PORT = 8080;

const store = MongoStore.create({
  mongoUrl: process.env.MONGODB_URI,
  crypto: {
    secret: process.env.SESSION_SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error inside MONGO SESSION STORE: ", err);
});

// session options
const sessionOptions = {
  store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));
app.use(session(sessionOptions));

// initialize passport and use passport session (** NOTE -> express-session is must for using passport local strategy)
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// import routes
import authRoutes from "./routes/auth.routes.js";
import codeRoutes from "./routes/code.routes.js";

app.get("/", (req, res) => {
  console.log(req.isAuthenticated());
  res.send("Hello From Codify Server");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/code", codeRoutes);

function startServer() {
  try {
    connectDB(process.env.MONGODB_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Server start on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error in server starting: ${error}`);
  }
}

startServer();
