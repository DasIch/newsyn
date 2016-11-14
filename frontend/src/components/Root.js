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
import Loading from './Loading';
import Login from './Login';


export default class Root extends Component {
  constructor(props) {
    super(props);

    this.requireAuth = this.requireAuth.bind(this);
  }

  requireAuth(nextState, replace) {
    const state = this.props.store.getState();
    if (!state.user.user) {
      replace({
        pathname: '/login/',
        state: {nextPathname: nextState.location.pathname}
      });
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Loading>
          <Router history={this.props.history}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} onEnter={this.requireAuth} />
              <Route path="/login/" component={Login} />
            </Route>
          </Router>
        </Loading>
      </Provider>
    );
  }
};
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
