import cron from "node-cron";
import { InternalServerError } from "../../core/errors/errors";

cron.schedule("0 8 * * *", async () => {
  try {
    // execute task
  } catch (error) {
    console.error("Erro ao executar job:", error);
    throw new InternalServerError("Erro ao executar job");
  }
});
