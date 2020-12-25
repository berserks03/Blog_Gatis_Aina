import { combineReducers, createStore } from 'redux';
import { articlesArray } from './articlesReducer/articlesReducer';

const reducer = combineReducers({
  articlesArray,
});

export const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>;
