export const ADD_ARTICLES = 'ADD_ARTICLES';
export const DELETE_ARTICLES = 'DELETE_AETICLES';
export const EDIT_ARTICLES = 'EDIT_ARTICLES';

export type ArticleType = {
  userId: number;
  id: number;
  title: string | undefined;
  body: string;
};


export type InitialState = {
  articles: ArticleType[];
  id: number;
  title: string,
  body: string,
};

export type AddArticles = {
  type: typeof ADD_ARTICLES;
  articles: ArticleType;
};

export type DeleteArticles = {
  type: typeof DELETE_ARTICLES;
  id: number | undefined;
};

export type EditArticles = {
  type: typeof EDIT_ARTICLES;
  article: ArticleType;
};

export interface AllActions extends InitialState {
  type: typeof ADD_ARTICLES | typeof DELETE_ARTICLES | typeof EDIT_ARTICLES;
}
