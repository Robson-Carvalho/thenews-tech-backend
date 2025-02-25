import axios from "axios";
import { InternalServerError } from "../../../core/errors/errors";
import { IArticles } from "../../../interfaces/IArticles";

const getDynamicFilter = () => {
  const today = new Date();

  const fromDate = new Date();
  fromDate.setDate(today.getDate() - 2);

  const toDate = new Date();
  toDate.setDate(today.getDate() - 1);

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  return `from=${formatDate(fromDate)}&to=${formatDate(toDate)}`;
};

const url = process.env.EXTERNAL_NEWS_API as string;
const filter = getDynamicFilter();
const getNewsFromExternalAPI = async (): Promise<IArticles[] | []> => {
  try {
    const fullUrl = `${url}?${filter}&language=pt&sortBy=popularity`;
    console.log(`Requisição para URL: ${fullUrl}`);

    const response = await axios.get(fullUrl);

    const { data } = response;

    if (!data || !data.articles) {
      return [];
    }

    const articles: IArticles[] = data.articles;
    return articles;
  } catch (error) {
    console.error("Erro ao buscar dados da API externa:", error);
    throw new InternalServerError("Falha ao obter dados da API externa");
  }
};

export { getNewsFromExternalAPI };
