/*
 *  Loading
 *  ~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startup } from '../actions';


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
  class Loading extends Component {
    componentDidMount() {
      this.props.startup();
    }

    render() {
      if (this.props.hasStarted) {
        return this.props.children;
      } else {
        return <p>Loading...</p>;
      }
    }
  }
);
