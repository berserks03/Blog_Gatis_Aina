import axios from 'axios';
import { Dispatch } from 'redux';
import { CommentType, ADD_COMMENTS, ADD_USER_COMMENT, DELETE_COMMENT, AllActions } from './commentsTypes';

const blogUrl = 'https://jsonplaceholder.typicode.com/comments';

const AddComments = (comments: CommentType[]): AllActions => {
  return {
    type: ADD_COMMENTS,
    payload: { comments },
  };
};

export const AddUserComments = (comment: CommentType): AllActions => {
  return {
    type: ADD_USER_COMMENT,
    payload: { comment },
  };
};

export const getComments = () => {
  return async (dispatch: Dispatch) => {
    const { data } = await axios.get(blogUrl);
    dispatch(AddComments(data));
  };
};

export const DeleteComment = (id: number): AllActions => {
  return {
    type: DELETE_COMMENT,
    payload: { id },
  };
};