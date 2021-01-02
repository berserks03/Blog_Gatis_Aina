export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_USER_COMMENT = 'ADD_USER_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// export type InitialState = {
//   comments: CommentType[];
//   comment: CommentType[];
//   id: number;
// };

export type AddComments = {
  type: typeof ADD_COMMENTS;
  payload: { comments: CommentType[] };
};

export type AddUserComment = {
  type: typeof ADD_USER_COMMENT;
  payload: { comment: CommentType };
};

export type DeleteComment = {
  type: typeof DELETE_COMMENT;
  payload: { id: number };
};

export type AllActions = AddComments | AddUserComment | DeleteComment;
