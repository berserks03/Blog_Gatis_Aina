export const ADD_ONLINE_USER = 'ADD_ONLINE_USER';
export const REMOVE_ONLINE_USER = 'REMOVE_ONLINE_USER';

export type LoginUserType = {
  name: string,
  password: string,
  online: 'loggedIn' | 'loggedOut',
  status: 'user' | 'admin',
};

// export type InitialState = {
//   user: LoginUserType;
// };

export type AddOnlineUser = {
  type: typeof ADD_ONLINE_USER;
  payload: { user: LoginUserType };
};

export type RemoveOnlineUser = {
  type: typeof REMOVE_ONLINE_USER;
  payload: { user: LoginUserType };
};

export type AllActions = AddOnlineUser | RemoveOnlineUser;
