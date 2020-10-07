import { AnyAction } from 'redux';
import { ActionTypes } from '../actions/types';

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COLLECTIONS:
      console.log('action.payload:', action.payload);
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
