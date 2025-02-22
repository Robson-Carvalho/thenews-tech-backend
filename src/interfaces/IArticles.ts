interface IArticles {
  id: number;
  href: string;
  published_at: string;
  title: string;
  description: string;
  body: string;
  author: {
    id: string;
    name: string;
  };
  image: string;
  categories: Array<{
    id: string;
    name: string;
    score: number;
    taxonomy: string;
    links: {
      self: string;
    };
  }>;
  industries: Array<{
    id: number;
    name: string;
    links: {
      self: string;
    };
  }>;
  language: string;
  source: {
    id: number;
    domain: string;
    home_page_url: string;
    type: string;
    rankings: {
      opr: number;
    };
    location: {
      country_name: string;
      country_code: string;
    };
    favicon: string;
  };
  sentiment: {
    overall: {
      score: number;
      polarity: string;
    };
    title: {
      score: number;
      polarity: string;
    };
    body: {
      score: number;
      polarity: string;
    };
  };
  summary: Array<{
    sentence: string;
    sentiment: {
      score: number;
      polarity: string;
    };
  }>;
  keywords: Array<string>;
  links: any;
  media: any;
  story: {
    id: number;
    uri: string;
  };
  is_duplicate: boolean;
  is_paywall: boolean;
  sentences_count: number;
  paragraphs_count: number;
  words_count: number;
  characters_count: number;
}

export { IArticles };
