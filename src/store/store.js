import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

const customMiddleWare = store => next => action => {
  if (!action.type) {
    next(action);
  }
  console.group('Redux DevTool:');
  console.log(
    '%ctype:',
    'padding: 2px; background:dodgerblue; border-radius: 5px;',
    action.type
  );
  console.log(
    '%cpayload:',
    ' padding: 2px; background:dodgerblue; border-radius: 5px;',
    action.payload
  );
  console.log(
    '%ccurrentState:',
    'padding: 2px; background: grey; border-radius: 5px;',
    store.getState()
  );
  next(action);
  console.log(
    '%cnextState:',
    ' padding: 2px; background: lime; border-radius: 5px;',
    store.getState()
  );
  console.groupEnd('Redux DevTool:');
};

const middleWares = [
  process.env.NODE_ENV !== 'production' && customMiddleWare,
  thunk
].filter(Boolean);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' && composeWithDevTools) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancers);

export const persistedStore = persistStore(store);
