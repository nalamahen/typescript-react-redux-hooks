import { createSelector } from 'reselect';
import { IGlobalState, IUser } from '../../interfaces';

const selectUser = (state: IGlobalState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: IUser) => user.currentUser
);
