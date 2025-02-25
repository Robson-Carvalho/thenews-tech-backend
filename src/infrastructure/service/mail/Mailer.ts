import nodemailer from "nodemailer";
import { InternalServerError } from "../../../core/errors/errors";
import { newsTemplateMail } from "./templates/news";
import { IArticles } from "../../../interfaces/IArticles";

class Mailer {
  private static instance: Mailer;

  private transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL_USER as string,
      pass: process.env.NODEMAILER_PASSWORD as string,
    },
    connectionTimeout: 10000,
    socketTimeout: 10000,
  });

  private constructor() {}

  public static getInstance(): Mailer {
    if (!Mailer.instance) {
      Mailer.instance = new Mailer();
    }

    return Mailer.instance;
  }

  public async sendNewsForSubscriber(emails: string[], articles: IArticles[]) {
    try {
      const info = await this.transporter.sendMail({
        from: `"the news tech 💻" <${process.env.NODEMAILER_EMAIL_USER}>`,
        to: [...emails],
        subject: "TheNews.Tech",
        html: newsTemplateMail(articles),
      });

      console.log("Email enviado com sucesso:", info.response);

      if (info.accepted.length > 0) {
        console.log("Emails enviados com sucesso para:", info.accepted);
      }

      if (info.rejected.length > 0) {
        console.log("Falha ao enviar para:", info.rejected);
      }
    } catch (error) {
      console.error("Error ao enviar e-mail: ", error);
      throw new InternalServerError("Erro ao enviar e-mail.");
    }
  }
}

export { Mailer };
