import { LoginUserType, ADD_ONLINE_USER, AllActions, REMOVE_ONLINE_USER } from './logInTypes';

export const initialState: {users: LoginUserType[]} = {
  users : [{
    name: 'gatis',
    password: 'gatis',
    online: 'loggedOut',
    status: 'admin'
  },
  {
    name: 'aina',
    password: '12345',
    online: 'loggedOut',
    status: 'admin'
  }]
};

export const loginReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_ONLINE_USER: {
      const newUsers = [...state.users];
      const index = state.users.findIndex((item) =>
        item.name === action.user.name
        && item.password === action.user.password);
      if (index !== -1) {
        newUsers[index].online = action.user.online;
      } else {
        newUsers.push({
          name: action.user.name,
          password: action.user.password,
          online: action.user.online,
          status: action.user.status,
        });
      }
      return {
        ...state,
        users: newUsers
      };
    }
    case REMOVE_ONLINE_USER: {
      const newUsers = [...state.users];
      const index = state.users.findIndex((item) =>
        item.name === action.user.name
        && item.password === action.user.password);
      newUsers[index].online = action.user.online;
      return {
        ...state,
        users: newUsers
      };
    }
    default:
      return state;
  }
};
