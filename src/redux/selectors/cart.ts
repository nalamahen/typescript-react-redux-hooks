import { createSelector } from 'reselect';

import { IGlobalState, IItem } from '../../interfaces';

const selectCart = (state: IGlobalState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: any) =>
    cartItems.reduce(
      (accumlatedQuantity: number, cartItem: IItem) =>
        accumlatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: any) =>
    cartItems.reduce(
      (accumlatedprice: number, cartItem: IItem) =>
        accumlatedprice + cartItem.price * cartItem.quantity,
      0
    )
);
