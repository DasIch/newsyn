/*
 *  Root
 *  ~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import { startup } from '../actions';


export default class Root extends Component {
  componentDidMount() {
    this.props.store.dispatch(startup());
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
          </Route>
        </Router>
      </Provider>
    );
  }
};
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
