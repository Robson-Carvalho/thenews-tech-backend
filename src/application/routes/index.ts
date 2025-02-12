import { Router, Request, Response } from "express";
import { subscriberRoutes } from "./subscriberRoutes";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome!" });
});

router.use("/subscriber", subscriberRoutes);

export { router as routes };
