import { ActionTypes } from './types';

export interface IToggleCartHidden {
  type: ActionTypes.TOGGLE_CART_HIDDEN;
}

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});
