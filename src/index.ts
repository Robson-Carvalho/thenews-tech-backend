import express, { Application } from "express";
import cors from "cors";

import { PostgreSQL } from "./infrastructure/database/postgreSQL";

const index: Application = express();
const db: PostgreSQL = PostgreSQL.getInstance();

db.connect();

index.use(cors());
index.use(express.json());

export { index };
