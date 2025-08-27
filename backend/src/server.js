import "../instrument.mjs"
import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { functions, inngest } from "./config/inngest.js";
import {serve} from "inngest/express";
import chatRoutes from "./routes/chat.route.js";
import * as Sentry from "@sentry/node";

import cors from "cors";

const app = express();
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
const PORT = ENV.PORT || 3000;

app.use(express.json());
app.use(clerkMiddleware()); // req.auth will be available in req object

Sentry.setupExpressErrorHandler(app);

app.get("/debug-sentry", (req, res) => {
  throw new Error("This is a test error");
});

app.get("/", (req, res) => {
  res.send("Hello World 123");
});


app.use("/api/inngest", serve({client: inngest, functions}))
app.use("/api/chat", chatRoutes)


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