import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = ENV.PORT || 3000;

app.listen(PORT || 3000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});

app.get("/", (req, res) => {
  res.send("Hello World 123");
});

