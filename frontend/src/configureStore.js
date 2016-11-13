/*
 *  configureStore
 *  ~~~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

import { rootReducer } from './reducers'


const logger = createLogger();

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
