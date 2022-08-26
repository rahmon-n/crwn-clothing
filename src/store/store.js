import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './root-reducer';

const customMiddleWares = store => next => action => {
  if (!action.type) {
    next(action);
  }

  console.log('type: ', action.type);
  console.log('payload : ', action.payload);
  console.log('currentState: ', store.getState());

  next(action);
  console.log('nextState: ', store.getState());
};

const middleWares = [customMiddleWares];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);
