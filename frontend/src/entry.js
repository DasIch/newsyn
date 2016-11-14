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

import EntryPoint from './components/EntryPoint';
import { configureStore } from './configureStore';


const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <EntryPoint store={store} history={browserHistory} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/EntryPoint', () => {
    const NextEntryPoint = require('./components/EntryPoint').default;
    ReactDOM.render(
      <AppContainer>
        <NextEntryPoint store={store} history={browserHistory} />
      </AppContainer>,
      rootElement
    );
  });
}
