/*
 *  Root
 *  ~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import React, { Component } from 'react';

import Header from './Header';


export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
