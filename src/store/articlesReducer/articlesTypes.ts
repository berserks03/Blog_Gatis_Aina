export const ADD_ARTICLES = 'ADD_ARTICLES';
export const DELETE_ARTICLE = 'DELETE_AETICLE';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';

export type ArticleType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};


// export type InitialState = {
//   articles: ArticleType[];
//   id: number;
//   title: string,
//   body: string,
// };

export type AddArticles = {
  type: typeof ADD_ARTICLES;
  payload: { articles: ArticleType[] };
};

export type DeleteArticle = {
  type: typeof DELETE_ARTICLE;
  payload: { id: number };
};

export type EditArticle = {
  type: typeof EDIT_ARTICLE;
  payload: { article: ArticleType };
};

export type AllActions = AddArticles | DeleteArticle | EditArticle;