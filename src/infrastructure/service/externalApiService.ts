import axios from "axios";
import { InternalServerError } from "../../core/errors/errors";
import { IArticles } from "../../interfaces/IArticles";

const url = process.env.EXTERNAL_NEWS_API as string;

const getNewsFromExternalAPI = async (): Promise<IArticles[]> => {
  try {
    const response = await axios.get(url);
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
