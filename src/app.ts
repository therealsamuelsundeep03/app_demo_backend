import express from "express";
import cors from "cors";

import { env } from "./env";
import { registerRoutes } from "./routes";
// import { errorHandler } from "./middlewares/error.middleware";

export function buildApp() {
  const app = express();

  // core middleware
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // routes
  registerRoutes(app);

  // error handler (LAST)
  //   app.use(errorHandler);

  return app;
}
