import { ArticleType, ADD_ARTICLES, DELETE_ARTICLES, AllActions } from './articlesTypes';

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
    case DELETE_ARTICLES: {
      const newArticles = [...state.articles];
      const index = state.articles.findIndex((item) =>
        item.id === action.id);
      newArticles.splice(index, 1);
      return {
        ...state,
        articles: newArticles,
      };
    }
    default:
      return state;
  }
};
