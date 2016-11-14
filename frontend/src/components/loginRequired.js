/*
 *  loginRequired
 *  ~~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component, PropTypes } from 'react';


const loginRequired = (WrappedComponent) => {
  class LoginRequired extends Component {
    constructor(props, context) {
      super(props);

      this.context = context;
    }

    ensureAuthentication(nextContext) {
      const context = nextContext || this.context;
      const state = context.store.getState();
      const router = context.router;
      const loggedIn = !state.user.isFetching && !!state.user.user;
      if (!loggedIn) {
        router.replace('/login/');
      }
    }

    componentWillMount() {
      this.ensureAuthentication();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
      this.ensureAuthentication(nextContext);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  LoginRequired.contextTypes = {
    store: PropTypes.object,
    router: PropTypes.object
  };
  return LoginRequired;
}

export default loginRequired;
