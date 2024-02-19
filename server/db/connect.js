import mongoose from "mongoose";

export function connectDB(dbUrl) {
  mongoose
    .connect(dbUrl)
    .then(() => console.log("Database connected successfully"))
    .catch((err) =>
      console.log(`Error while connected the database :: ${err}`)
    );
}
