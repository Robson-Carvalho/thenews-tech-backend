import { Router, Request, Response } from "express";
import { subscriberRoutes } from "./subscriberRoutes";
import { sendNews } from "../../infrastructure/jobs/sendNews";
import { jobRoutes } from "./jobRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome!" });
});

router.use("/subscriber", subscriberRoutes);

router.use("/run-cron", jobRoutes);

export { router as routes };
