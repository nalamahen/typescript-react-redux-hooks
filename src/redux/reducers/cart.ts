import { ActionTypes, CartAction } from '../actions/types';

const INITIAL_STATE = {
  hidden: true,
};
const cartReducer = (state = INITIAL_STATE, action: CartAction) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
