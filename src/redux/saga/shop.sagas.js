import {takeEvery} from 'redux-saga/effects'

import {ActionTypes} from '../actions/types'

export function* fetchCollectionsAsync() {
    yield console.log('I am fired')
}

export function* fectchCollectionStart() {
    yield takeEvery(ActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)

}

