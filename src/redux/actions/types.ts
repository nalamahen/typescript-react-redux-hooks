import { ISetCurrentUserAction } from './user';
import { IAddItem, IToggleCartHidden } from './cart';

export enum ActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
}

export type UserAction = ISetCurrentUserAction;

export type CartAction = IToggleCartHidden | IAddItem;
