import { ActionTypes } from './types';
import { ICurrentUser } from '../../interfaces';

export interface ISetCurrentUserAction {
  type: ActionTypes.SET_CURRENT_USER;
  payload: ICurrentUser;
}

export const setCurrentUser = (user: ICurrentUser) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
