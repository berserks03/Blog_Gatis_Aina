export const ADD_COMMENTS = 'ADD_COMMENTS';

export type CommentType = {
  postId: number;
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

export interface AllActions extends InitialState {
  type: typeof ADD_COMMENTS;
}
