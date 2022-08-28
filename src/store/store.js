import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' && composeWithDevTools) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancers);

export const persistedStore = persistStore(store);
