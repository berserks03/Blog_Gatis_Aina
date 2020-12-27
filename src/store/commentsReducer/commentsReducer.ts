import { CommentType, ADD_COMMENTS, AllActions } from './commentsTypes';

export const initialState: { comments: CommentType[] } = {
  comments: [],
};

export const commentsArray = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_COMMENTS: {
      return {
        ...state,
        comments: action.comments,
      };
    }
    default:
      return state;
  }
};