import { LoginUserType, ADD_ONLINE_USER, REMOVE_ONLINE_USER } from './logInTypes';


export const AddOnlineUser = (user: LoginUserType) => {
  return {
    type: ADD_ONLINE_USER,
    user,
  };
};

export const RemoveOnlineUser = (user: LoginUserType) => {
  return {
    type: REMOVE_ONLINE_USER,
    user,
  };
};

