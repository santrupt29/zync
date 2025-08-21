import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import {serve} from "inngest/express";

const app = express();
const PORT = ENV.PORT || 3000;

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/inngest", serve({client: inngest, functions}))


app.get("/", (req, res) => {
  res.send("Hello World 123");
});

const startServer = async() => {
  try {
    await connectDB();
    if (ENV.NODE_ENV !== 'production') {
      app.listen(ENV.PORT, ()=> {
        console.log("Server started on Port", ENV.PORT);
      })
    }
  } catch (error) {
    console.log("Error starting server:", error)
    process.exit(1);
  }
}

startServer();
export default app;