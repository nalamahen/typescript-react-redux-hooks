import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/';
import { fectchCollectionsStart } from './saga/shop.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fectchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
