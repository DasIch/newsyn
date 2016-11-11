/*
 *  entry
 *  ~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import routes from './routes'

ReactDOM.render(
  <AppContainer>
    {routes}
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./routes", () => {
    const nextRoutes = require("./routes").default;
    ReactDOM.render(
      <AppContainer>
        {nextRoutes}
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
