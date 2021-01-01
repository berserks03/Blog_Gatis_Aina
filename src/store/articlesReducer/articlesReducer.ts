import { ArticleType, ADD_ARTICLES, DELETE_ARTICLES, EDIT_ARTICLES, AllActions } from './articlesTypes';

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
    case EDIT_ARTICLES: {
      const newArticles = [...state.articles];
      const index = state.articles.findIndex((item) =>
        item.id === action.id);
      newArticles[index].title = action.title;
      newArticles[index].body = action.body;
      return {
        ...state,
        articles: newArticles,
      };
    }
    default:
      return state;
  }
};
