export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_USER_COMMENTS = 'ADD_USER_COMMENTS';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

export type CommentType = {
  postId: number | undefined;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type InitialState = {
  comments: CommentType[];
  id: number;
};

export type AddComments = {
  type: typeof ADD_COMMENTS;
  comments: CommentType;
};

export type AddUserComments = {
  type: typeof ADD_USER_COMMENTS;
  comments: CommentType;
};

export type DeletComments = {
  type: typeof DELETE_COMMENTS;
  id: number | undefined;
};

export interface AllActions extends InitialState {
  type: typeof ADD_COMMENTS | typeof ADD_USER_COMMENTS | typeof DELETE_COMMENTS;
}
