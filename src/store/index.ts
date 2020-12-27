import { combineReducers } from 'redux';
import { articlesArray } from './articlesReducer/articlesReducer';
import { commentsArray } from './commentsReducer/commentsReducer';

export const rootReducer = combineReducers({
  articlesArray,
  commentsArray
});

export type RootState = ReturnType<typeof rootReducer>;
