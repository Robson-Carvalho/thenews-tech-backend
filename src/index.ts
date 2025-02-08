import express, { Application } from "express";
import cors from "cors";

const index: Application = express();

index.use(cors());
index.use(express.json());

export { index };
