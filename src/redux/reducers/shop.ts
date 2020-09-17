import SHOP_DATA from '../../components/pages/shop/shop.data';
import { AnyAction } from 'redux';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
