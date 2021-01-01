export const ADD_ARTICLES = 'ADD_ARTICLES';
export const DELETE_ARTICLES = 'DELETE_AETICLES';

export type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


export type InitialState = {
  articles: ArticleType[];
  id: number;
};

export type AddArticles = {
  type: typeof ADD_ARTICLES;
  articles: ArticleType;
};

export type DeleteArticles = {
  type: typeof DELETE_ARTICLES;
  id: number | undefined;
};

export interface AllActions extends InitialState {
  type: typeof ADD_ARTICLES | typeof DELETE_ARTICLES;
}
