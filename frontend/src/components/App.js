/*
 *  Loading
 *  ~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { startup } from '../actions';
import Root from './Root';
import Home from './Home';
import Login from './Login';


const mapStateToProps = (state) => {
  return {
    hasStarted: state.startup
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    startup: () => dispatch(startup())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(
  class App extends Component {
    componentDidMount() {
      this.props.startup();
    }

    render() {
      if (this.props.hasStarted) {
        return (
          <Router history={this.props.history}>
            <Route path="/" component={Root}>
              <IndexRoute component={Home} />
              <Route path="/login/" component={Login} />
            </Route>
          </Router>
        );
      } else {
        return <p>Loading...</p>;
      }
    }
  }
);
