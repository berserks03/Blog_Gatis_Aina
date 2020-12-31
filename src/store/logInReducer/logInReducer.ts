import { LoginUserType, ADD_ONLINE_USER, AllActions } from './logInTypes';

export const initialState: {users: LoginUserType[]} = {
  users : [{
    name: 'gatis',
    online: false,
    status: 'admin'
  },
  {
    name: 'aina',
    online: false,
    status: 'admin'
  }]
};

export const loginReducer = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ADD_ONLINE_USER: {
      const newUsers = [...state.users];
      const index = state.users.findIndex((item) =>
        item.name === action.user.name);
      if (index !== -1) {
        newUsers[index].online = true;
      } else {
        newUsers.push({
          name: action.user.name,
          online: action.user.online,
          status: action.user.status,
        });
      }
      return {
        ...state,
        users: newUsers
      };
    }
    default:
      return state;
  }
};
