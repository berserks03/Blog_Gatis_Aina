import { LogInType, SET_LOGIN_STATE, AllActions } from './logInTypes';

export const initialState: LogInType = {
  isLoggedIn: false,
  userName: '',
  userPassword: '',
  userStatus: '',
};

export const loginReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    // case SET_LOGIN_STATE: {
    //   return {
    //     ...state,
    //     ...action,
    //     isLoggedIn: true,
    //   };
    // }
    default:
      return state;
  }
};
