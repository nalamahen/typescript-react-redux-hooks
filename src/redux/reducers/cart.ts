import { ActionTypes, CartAction } from '../actions/types';
import { addItemToCart } from './utils';

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
    default:
      return state;
  }
};

export default cartReducer;
