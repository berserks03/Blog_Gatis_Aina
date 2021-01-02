import { CommentType, ADD_COMMENTS, ADD_USER_COMMENT, DELETE_COMMENT, AllActions } from './commentsTypes';

export const initialState: { comments: CommentType[] } = {
  comments: [],
};

export const commentsReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_COMMENTS: {
      return {
        ...state,
        comments: action.payload.comments,
      };
    }
    case ADD_USER_COMMENT: {
      const newComments = [...state.comments];
      newComments.push(action.payload.comment);
      return {
        ...state,
        comments: newComments,
      };
    }
    case DELETE_COMMENT: {
      const newComments = [...state.comments];
      const index = state.comments.findIndex((item) => 
        item.id === action.payload.id);
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