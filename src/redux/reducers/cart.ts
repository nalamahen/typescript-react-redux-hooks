import { ActionTypes, CartAction } from '../actions/types';
import { addItemToCart, removeItemFromCart } from './utils';
import { IItem } from '../../interfaces';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action: CartAction) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case ActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem: IItem) => cartItem.id != action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
