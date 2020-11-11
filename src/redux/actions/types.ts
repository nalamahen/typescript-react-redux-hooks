import { ISetCurrentUserAction } from './user';
import {
  IAddItem,
  IToggleCartHidden,
  IRemoveItemFromCart,
  IClearItemFromCart,
} from './cart';

import {
  IFetchCollectionsStart,
  IFetchCollectionsSuccess,
  IFetchCollectionsFailure,
} from './shop';

export enum ActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',

  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',

  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE',
}

export type UserAction = ISetCurrentUserAction;

export type CartAction =
  | IToggleCartHidden
  | IAddItem
  | IRemoveItemFromCart
  | IClearItemFromCart;

export type ShopAction =
  | IFetchCollectionsStart
  | IFetchCollectionsSuccess
  | IFetchCollectionsFailure;
