import { ActionTypes } from './types';
import { ICollection } from '../../interfaces';

export const updateCollections = (collectionsMap: ICollection[]) => {
  return { type: ActionTypes.UPDATE_COLLECTIONS, payload: collectionsMap };
};
