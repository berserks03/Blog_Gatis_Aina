import { combineReducers } from 'redux';
import { articlesArray } from './articlesReducer/articlesReducer';

export const reducer = combineReducers({
  articlesArray,
});

export type RootState = ReturnType<typeof reducer>;
