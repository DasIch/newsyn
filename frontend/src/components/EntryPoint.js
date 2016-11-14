/*
 *  EntryPoint
 *  ~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

import App from './App';


export default class EntryPoint extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <App history={this.props.history} />
      </Provider>
    );
  }
};
EntryPoint.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
