export const ADD_ONLINE_USER = 'ADD_ONLINE_USER';

export type LoginUserType = {
  name: string,
  password: string,
  online: boolean,
  status: 'user' | 'admin';
};

export type InitialState = {
  user: LoginUserType;
};

export type AddOnlineUser = {
  type: typeof ADD_ONLINE_USER;
  user: LoginUserType;
};

export interface AllActions extends InitialState {
  type: typeof ADD_ONLINE_USER;
}
