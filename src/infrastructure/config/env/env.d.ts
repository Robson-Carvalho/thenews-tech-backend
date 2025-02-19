declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: number;
    DATABASE_URL?: string;
    EXTERNAL_NEWS_API?: string;
    UNSUBSCRIBER_LINK?: string;
    NODEMAILER_EMAIL_USER?: string;
    NODEMAILER_PASSWORD?: string;
  }
}
