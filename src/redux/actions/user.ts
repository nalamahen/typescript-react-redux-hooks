import { ActionTypes } from './types';

export interface SetCurrentUserAction {
  type: ActionTypes.SET_CURRENT_USER;
  payload: any;
}

export const setCurrentUser = (user: any) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
