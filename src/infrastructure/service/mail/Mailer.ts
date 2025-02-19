import nodemailer from "nodemailer";
import { InternalServerError } from "../../../core/errors/errors";
import { newsTemplateMail } from "./templates/news";
import { IArticles } from "../../../interfaces/IArticles";

class Mailer {
  private static instance: Mailer;

  private transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL_USER as string,
      pass: process.env.NODEMAILER_PASSWORD as string,
    },
  });

  private constructor() {}

  public static getInstance(): Mailer {
    if (!Mailer.instance) {
      Mailer.instance = new Mailer();
    }

    return Mailer.instance;
  }

  public async sendNewsForSubscriber(email: string, articles: IArticles[]) {
    try {
      await this.transporter.sendMail({
        from: `${process.env.NODEMAILER_EMAIL_USER}`,
        to: email,
        subject: "The News Tech - Notícias sobre Tecnologia",
        html: newsTemplateMail(email, articles),
      });
    } catch (error) {
      console.error("Error ao enviar e-mail: ", error);
      throw new InternalServerError("Erro ao enviar e-mail.");
    }
  }
}

export { Mailer };
