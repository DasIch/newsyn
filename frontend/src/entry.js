/*
 *  entry
 *  ~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import Root from './components/Root';
import { configureStore } from './configureStore';


const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={browserHistory} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} history={browserHistory} />
      </AppContainer>,
      rootElement
    );
  });
}
