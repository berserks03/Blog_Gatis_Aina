import { ArticleType, ADD_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, AllActions } from './articlesTypes';

export const initialState: { articles: ArticleType[] } = {
  articles: [],
};

export const articlesReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_ARTICLES: {
      return {
        ...state,
        articles: action.payload.articles,
      };
    }
    case DELETE_ARTICLE: {
      const newArticles = [...state.articles];
      const index = state.articles.findIndex((item) =>
        item.id === action.payload.id);
      newArticles.splice(index, 1);
      return {
        ...state,
        articles: newArticles,
      };
    }
    case EDIT_ARTICLE: {
      const newArticles = [...state.articles];
      const index = state.articles.findIndex((item) =>
        item.id === action.payload.article.id);
      newArticles[index].title = action.payload.article.title;
      newArticles[index].body = action.payload.article.body;
      return {
        ...state,
        articles: newArticles,
      };
    }
    default:
      return state;
  }
};
