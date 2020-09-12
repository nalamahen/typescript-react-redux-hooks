import { IItem } from '../../interfaces';
import { ActionTypes } from './types';

export interface IToggleCartHidden {
  type: ActionTypes.TOGGLE_CART_HIDDEN;
}

export interface IAddItem {
  type: ActionTypes.ADD_ITEM;
  payload: IItem;
}

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: IItem) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});
