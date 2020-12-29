import axios from 'axios';
import { Dispatch } from 'redux';
import { CommentType, ADD_COMMENTS, ADD_USER_COMMENTS } from './commentsTypes';

const blogUrl = 'https://jsonplaceholder.typicode.com/comments';

const AddComments = (comments: CommentType[]) => {
  return {
    type: ADD_COMMENTS,
    comments,
  };
};

export const AddUserComments = (comments: CommentType) => {
  return {
    type: ADD_USER_COMMENTS,
    comments,
  };
};

export const getComments = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(blogUrl);
    dispatch(AddComments(data));
  };
};