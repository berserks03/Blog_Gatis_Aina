export const ADD_ARTICLES = 'ADD_ARTICLES';

export type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type AddArticles = {
  type: typeof ADD_ARTICLES;
  articles: ArticleType;
};

export type AllActions = AddArticles;
