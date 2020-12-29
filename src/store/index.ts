import { combineReducers } from 'redux';
import { articlesArray } from './articlesReducer/articlesReducer';
import { commentsArray } from './commentsReducer/commentsReducer';
// import { loginReducer } from './logInReducer/logInReducer';

export const rootReducer = combineReducers({
  articlesArray,
  commentsArray,
});

export type RootState = ReturnType<typeof rootReducer>;
