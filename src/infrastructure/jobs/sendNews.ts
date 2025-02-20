import { getNewsFromExternalAPI } from "../service/integrations/externalApiService";
import { SubscriberRepository } from "../repositories/subscriberRepository";
import { PostgreSQL } from "../database/postgreSQL";
import { Mailer } from "../service/mail/Mailer";

const sendNews = async () => {
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

export { sendNews };
