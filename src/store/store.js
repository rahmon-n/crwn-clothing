import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root-reducer';

const customMiddleWares = store => next => action => {
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

const middleWares = [customMiddleWares];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);
