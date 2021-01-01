import { CommentType, ADD_COMMENTS, ADD_USER_COMMENTS, DELETE_COMMENTS, AllActions } from './commentsTypes';

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
    case ADD_USER_COMMENTS: {
      return {
        ...state,
        comments: state.comments.concat(action.comments),
      };
    }
    case DELETE_COMMENTS: {
      const newComments = [...state.comments];
      const index = state.comments.findIndex((item) => 
        item.id === action.id);
      newComments.splice(index, 1);
      return {
        ...state,
        comments: newComments,
      };
    }
    default:
      return state;
  }
};