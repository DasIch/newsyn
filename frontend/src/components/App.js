/*
 *  App
 *  ~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    hasStarted: state.startup
  };
};


export default connect(mapStateToProps)(
  class App extends Component {
    render() {
      const renderContent = () => {
        if (this.props.hasStarted) {
          return this.props.children;
        } else {
          return <p>Loading...</p>;
        }
      }
      return (
        <div>
          <h1>Newsyn</h1>
          <div className="content">
            {renderContent()}
          </div>
        </div>
      );
    }
  }
);
