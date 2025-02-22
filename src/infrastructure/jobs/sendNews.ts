import { getNewsFromExternalAPI } from "../service/integrations/externalApiService";
import { SubscriberRepository } from "../repositories/subscriberRepository";
import { PostgreSQL } from "../database/postgreSQL";
import { Mailer } from "../service/mail/Mailer";
import { IArticles } from "../../interfaces/IArticles";

const sendNews = async () => {
  const news = await getNewsFromExternalAPI();

  if (news) {
    const db = await PostgreSQL.getInstance();
    const repository = new SubscriberRepository(db);
    const mailer = Mailer.getInstance();

    const subscribers = await repository.getAll();

    const emails: string[] = [];

    subscribers.forEach((subscriber) => {
      emails.push(subscriber.email);
    });

    const newsForSend: IArticles[] = [];

    news.forEach((_news) => {
      if (
        !newsForSend.some(
          (existingArticle) => existingArticle.title === _news.title
        ) &&
        newsForSend.length < 10
      ) {
        newsForSend.push(_news);
      }
    });

    await mailer.sendNewsForSubscriber(emails, newsForSend);
  }
};

export { sendNews };
