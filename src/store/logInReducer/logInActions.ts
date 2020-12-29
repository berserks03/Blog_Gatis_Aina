import { SET_LOGIN_STATE } from './logInTypes';

type LoginInputType = {
  userName: string;
  password: string;
};

export const SetLoginState = (logInData: LoginInputType) => {
  return {
    type: SET_LOGIN_STATE,
    payload: logInData,
  };
};
