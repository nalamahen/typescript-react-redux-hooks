import { SetCurrentUserAction } from './user';

export enum ActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export type UserAction = SetCurrentUserAction;
