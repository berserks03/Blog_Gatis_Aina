import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer/articlesReducer';
import { commentsReducer } from './commentsReducer/commentsReducer';
import { loginReducer } from './logInReducer/logInReducer';

export const rootReducer = combineReducers({
  articlesArray: articlesReducer,
  commentsArray: commentsReducer,
  loginState: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
