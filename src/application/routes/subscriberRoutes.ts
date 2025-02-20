import { Router, Request, Response, NextFunction } from "express";
import { SubscriberController } from "../controllers/subscriberController";
import { SubscriberRepository } from "../../infrastructure/repositories/subscriberRepository";
import { PostgreSQL } from "../../infrastructure/database/postgreSQL";

const router = Router();

const db = PostgreSQL.getInstance();
const subscriberRepository = new SubscriberRepository(db);
const subscriberController = new SubscriberController(subscriberRepository);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  subscriberController.getCount(req, res, next);
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  subscriberController.insert(req, res, next);
});

router.delete("/:email", (req: Request, res: Response, next: NextFunction) => {
  subscriberController.delete(req, res, next);
});

export { router as subscriberRoutes };
