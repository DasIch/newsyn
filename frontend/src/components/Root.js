/*
 *  Root
 *  ~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import React, { Component } from 'react';


export default class Root extends Component {
  render() {
    return (
      <div>
        <h1>Newsyn</h1>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
