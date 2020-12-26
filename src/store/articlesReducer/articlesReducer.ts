import { ArticleType, ADD_ARTICLES, AllActions } from './articlesTypes';

export const initialState: { articles: ArticleType[] } = {
  articles: [],
};

export const articlesArray = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    default:
      return state;
  }
};
