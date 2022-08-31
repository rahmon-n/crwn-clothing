import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { rootReducer } from './root-reducer';
import {rootSaga} from "./root-saga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleware
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' && composeWithDevTools) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancers);

sagaMiddleware.run(rootSaga)

export const persistedStore = persistStore(store);
