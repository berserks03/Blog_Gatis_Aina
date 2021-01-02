import { LoginUserType, ADD_ONLINE_USER, REMOVE_ONLINE_USER, AllActions } from './logInTypes';


export const AddOnlineUser = (user: LoginUserType): AllActions => {
  return {
    type: ADD_ONLINE_USER,
    payload: { user },
  };
};

export const RemoveOnlineUser = (user: LoginUserType): AllActions => {
  return {
    type: REMOVE_ONLINE_USER,
    payload: { user },
  };
};

