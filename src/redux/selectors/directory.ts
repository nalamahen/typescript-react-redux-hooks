import { createSelector } from 'reselect';

import { IGlobalState } from '../../interfaces';

const selectDirectory = (state: IGlobalState) => state.directory;

export const selectDirctorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
