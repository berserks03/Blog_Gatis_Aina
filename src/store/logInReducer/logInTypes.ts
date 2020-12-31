export const ADD_ONLINE_USER = 'ADD_ONLINE_USER';
export const REMOVE_ONLINE_USER = 'REMOVE_ONLINE_USER';

export type LoginUserType = {
  name: string | undefined,
  password: string | undefined,
  online: 'loggedIn' | 'loggedOut' | undefined,
  status: 'user' | 'admin' | undefined,
};

export type InitialState = {
  user: LoginUserType;
};

export type AddOnlineUser = {
  type: typeof ADD_ONLINE_USER;
  user: LoginUserType;
};

export type RemoveOnlineUser = {
  type: typeof REMOVE_ONLINE_USER;
  user: LoginUserType;
};

export interface AllActions extends InitialState {
  type: typeof ADD_ONLINE_USER | typeof REMOVE_ONLINE_USER;
}
