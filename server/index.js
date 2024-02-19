import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json({ urlencoded: true }));

app.get("/", (req, res) => {
  res.send("Hello From Codify Server");
});

function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Server start on port: ${PORT}`);
    });
  } catch (error) {
    console.log(`Error in server starting: ${error}`);
  }
}

startServer();
