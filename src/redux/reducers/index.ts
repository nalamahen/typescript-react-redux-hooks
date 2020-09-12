import { combineReducers } from 'redux';

import userReducer from './user';
import cartReducer from './cart';

export const reducers = combineReducers<any>({
  user: userReducer,
  cart: cartReducer,
});
