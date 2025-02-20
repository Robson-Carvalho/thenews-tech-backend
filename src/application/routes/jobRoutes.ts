import { NextFunction, Request, Response, Router } from "express";
import { sendNews } from "../../infrastructure/jobs/sendNews";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`[Cron Job] Iniciando envio de notícias`);

    await sendNews();

    console.log("[Cron Job] Concluído com sucesso.");
    res.status(200).json({ message: "Cron job executado com sucesso" });
  } catch (error) {
    console.error("[Cron Job] Erro ao executar:", error);
    res.status(500).json({ error: "Erro ao executar o cron job" });
  }
});

export { router as jobRoutes };
