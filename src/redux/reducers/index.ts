import { combineReducers } from 'redux';

import userReducer from './user';

export const reducers = combineReducers<any>({
  user: userReducer,
});
