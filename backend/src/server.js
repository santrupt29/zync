import express from "express";
import { ENV } from "./config/env.js";

const app = express();
const PORT = ENV.PORT || 3000;

app.listen(PORT || 3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World 123");
});