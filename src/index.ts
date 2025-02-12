import express, { Application } from "express";
import cors from "cors";

import { PostgreSQL } from "./infrastructure/database/postgreSQL";
import { routes } from "./application/routes";
import { errorHandler } from "./application/middlewares/errorHandler";

const index: Application = express();
const db: PostgreSQL = PostgreSQL.getInstance();

db.connect();

index.use(cors());
index.use(express.json());
index.use("/v1", routes);
index.use(errorHandler);

export { index };
