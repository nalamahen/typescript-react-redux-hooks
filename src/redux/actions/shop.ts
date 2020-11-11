import { ActionTypes, ShopAction } from './types';
import { Dispatch } from 'redux';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase-utils';

import { ICollection } from '../../interfaces';

export interface IFetchCollectionsStart {
  type: ActionTypes.FETCH_COLLECTIONS_START;
}

export interface IFetchCollectionsSuccess {
  type: ActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: ICollection;
}

export interface IFetchCollectionsFailure {
  type: ActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: string;
}

export const fetchCollectionsStart = () => ({
  type: ActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: ICollection) => ({
  type: ActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFalilure = (errorMessage: string) => ({
  type: ActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFalilure(error.message)));
  };
};
