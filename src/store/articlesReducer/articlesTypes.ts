export const ADD_ARTICLES = 'ADD_ARTICLES';
export const SEARCH_ARTICLES = 'SEARCH_ARTICLES';

export type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


export type InitialState = {
  articles: ArticleType[];
};

export type AddArticles = {
  type: typeof ADD_ARTICLES;
  articles: ArticleType;
};

export interface AllActions extends InitialState {
  type: typeof ADD_ARTICLES;
}
