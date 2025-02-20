import axios from "axios";
import { InternalServerError } from "../../../core/errors/errors";
import { IArticles } from "../../../interfaces/IArticles";

const url = process.env.EXTERNAL_NEWS_API as string;

const getDateFilter = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  today.setHours(6, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  const fromDate = yesterday.toISOString().split(".")[0] + "Z";
  const toDate = today.toISOString().split(".")[0] + "Z";

  const date = `&from=${fromDate}&to=${toDate}`;

  return date;
};

const getNewsFromExternalAPI = async (): Promise<IArticles[]> => {
  try {
    const response = await axios.get(`${url}/${getDateFilter()}`);

    const { data } = await response;

    if (!data) {
      return [];
    }

    const { articles }: { articles: IArticles[] } = data;

    return articles;
  } catch (error) {
    console.error("Erro ao buscar dados da API externa:", error);
    throw new InternalServerError("Falha ao obter dados da API externa");
  }
};

export { getNewsFromExternalAPI };
