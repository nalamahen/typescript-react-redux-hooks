import { IItem } from '../../interfaces';
import { ActionTypes } from './types';

export interface IToggleCartHidden {
  type: ActionTypes.TOGGLE_CART_HIDDEN;
}

export interface IAddItem {
  type: ActionTypes.ADD_ITEM;
  payload: IItem;
}

export interface IRemoveItemFromCart {
  type: ActionTypes.REMOVE_ITEM;
  payload: IItem;
}

export interface IClearItemFromCart {
  type: ActionTypes.CLEAR_ITEM_FROM_CART;
  payload: IItem;
}

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item: IItem) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item: IItem) => ({
  type: ActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
