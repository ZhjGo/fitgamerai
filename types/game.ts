export interface GameLocaleData {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Game {
  id: string;
  en: GameLocaleData;
  zh: GameLocaleData;
}
