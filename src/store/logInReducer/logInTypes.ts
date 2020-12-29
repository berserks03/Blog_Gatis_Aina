export const SET_LOGIN_STATE = 'SET_LOGIN_STATE';

export type LogInType = {
  isLoggedIn: false;
  userName: string;
  userPassword: string;
  userStatus: string;
};

export type InitialState = {
  isLoggedIn: false;
  userName: '';
  userPassword: '';
  userStatus: '';
};

export type SetLoginState = {
  type: typeof SET_LOGIN_STATE;
  payload: LogInType;
};

export interface AllActions extends InitialState {
  type: typeof SET_LOGIN_STATE;
}
