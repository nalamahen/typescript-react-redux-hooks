import { takeEvery, call, put } from 'redux-saga/effects';

import { ActionTypes } from '../actions/types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase-utils';

import {
  fetchCollectionsFalilure,
  fetchCollectionsSuccess,
} from '../actions/shop';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFalilure(error.message));
  }
}

export function* fectchCollectionsStart() {
  yield takeEvery(ActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
