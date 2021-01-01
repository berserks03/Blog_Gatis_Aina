import axios from 'axios';
import { Dispatch } from 'redux';
import { ArticleType, ADD_ARTICLES, DELETE_ARTICLES } from './articlesTypes';

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

const AddArticles = (articles: ArticleType[]) => {
  return {
    type: ADD_ARTICLES,
    articles,
  };
};

export const getArticles = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(blogUrl);
    dispatch(AddArticles(data));
  };
};

export const DeleteArticles = (id: number) => {
  return {
    type: DELETE_ARTICLES,
    id,
  };
};