import { IArticles } from "../../../../../interfaces/IArticles";

const generateArticleHTML = (article: IArticles): string => {
  return `
      <div class="article" style="border-bottom: 1px solid #ddd; padding: 15px 0;">
        <img src="${
          article.urlToImage
        }" alt="Article Image" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 5px;">
        <h2 style="margin: 10px 0 5px; font-size: 18px;">
          <a href="${
            article.url
          }" style="color: #007bff; text-decoration: none;">${article.title}</a>
        </h2>
        <p style="color: #555; font-size: 14px;">
          <strong>${article.source.name}</strong> - ${
    article.author ? article.author : "Desconhecido"
  }
        </p>
        <p style="color: #333; font-size: 14px;">${article.description}</p>
        <a href="${
          article.url
        }" style="color: #007bff; text-decoration: none; font-weight: bold;">
          Leia mais...
        </a>
      </div>
    `;
};

const newsTemplateMail = (articles: IArticles[]): string => {
  const articlesHTML = articles.map(generateArticleHTML).join("");
  const unsubscribeLink = process.env.UNSUBSCRIBER_LINK as string;
  const url = `${unsubscribeLink}`;

  return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>The News Tech API</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; max-width: 600px; margin: auto;">
      <h1 style="text-align: center; color: #333;">The News Tech API 💻</h1>
      <p style="text-align: center; color: #777;">Portal de notícias sobre tecnologia.</p>
      <div style="background: #fff; padding: 15px; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        ${articlesHTML}
      </div>
      <p style="text-align: center; font-size: 12px; color: #888; margin-top: 20px;">
        Caso não queira mais receber nossos e-mails, você pode 
        <a href="${url}" style="color:rgb(255, 150, 150); text-decoration: none; font-weight: bold;">cancelar sua inscrição</a>.
      </p>
    </body>
    </html>
    `;
};

export { newsTemplateMail };
