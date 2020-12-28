export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_USER_COMMENTS = 'ADD_USER_COMMENTS';

export type CommentType = {
  postId: number | undefined;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type InitialState = {
  comments: CommentType[];
};

export type AddArticles = {
  type: typeof ADD_COMMENTS;
  comments: CommentType;
};

export type AddUserComments = {
  type: typeof ADD_USER_COMMENTS;
  comments: CommentType;
};

export interface AllActions extends InitialState {
  type: typeof ADD_COMMENTS | typeof ADD_USER_COMMENTS;
}
