import cron from "node-cron";
import { InternalServerError } from "../../core/errors/errors";
import { getNewsFromExternalAPI } from "../service/integrations/externalApiService";
import { SubscriberRepository } from "../repositories/subscriberRepository";
import { PostgreSQL } from "../database/postgreSQL";
import { Mailer } from "../service/mail/Mailer";

const sendNews = async () => {
  console.log(
    `Log: Enviando notícias - Data: ${new Date().toLocaleDateString("pt-BR")}`
  );
  const news = await getNewsFromExternalAPI();

  if (news) {
    const db = await PostgreSQL.getInstance();
    const repository = new SubscriberRepository(db);
    const mailer = Mailer.getInstance();

    const subscribers = await repository.getAll();

    subscribers.forEach((subscriber) => {
      mailer.sendNewsForSubscriber(subscriber.email, news.slice(0, 10));
    });
  }
};

cron.schedule("0 8 * * *", () => {
  try {
    sendNews();
  } catch (error) {
    console.error("Erro ao executar job:", error);
    throw new InternalServerError("Erro ao executar job");
  }
});
