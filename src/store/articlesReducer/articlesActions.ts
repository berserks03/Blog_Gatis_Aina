// import Axios from 'axios';
import { ArticleType, ADD_ARTICLES } from './articlesTypes';

export const AddArticles = (articles: ArticleType) => {
  return {
    type: ADD_ARTICLES,
    articles,
  };
};

// const AddArticlesAction = (articles: ArticleType) => {
//   return {
//     type: ADD_ARTICLES,
//     articles,
//   };
// };

// export const AddArticles = () => {
//   return async (dispatch) => {
//     const { data } = await Axios.get('');
//     const articles = data.results;

//     dispatch(AddArticlesAction(articles));
//   };
// };
