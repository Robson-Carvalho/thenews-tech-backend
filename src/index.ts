import express, { Application } from "express";
import cors from "cors";

import "./infrastructure/jobs/sendNews";

import { PostgreSQL } from "./infrastructure/database/postgreSQL";
import { routes } from "./application/routes";
import { errorHandler } from "./application/middlewares/errorHandler";

const index: Application = express();
const db: PostgreSQL = PostgreSQL.getInstance();

db.connect();

index.use(
  cors({
    origin: "*",
  })
);
index.use(express.json());
index.use("/v1", routes);
index.use(errorHandler);

export { index };
