import axios from 'axios';
import { Dispatch } from 'redux';
import { ArticleType, ADD_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, AllActions } from './articlesTypes';

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

const AddArticles = (articles: ArticleType[]): AllActions => {
  return {
    type: ADD_ARTICLES,
    payload: { articles },
  };
};

export const getArticles = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(blogUrl);
    dispatch(AddArticles(data));
  };
};

export const DeleteArticle = (id: number): AllActions => {
  return {
    type: DELETE_ARTICLE,
    payload: { id },
  };
};

export const EditPost = (article: ArticleType): AllActions => {
  return {
    type: EDIT_ARTICLE,
    payload: { article },
  };
};