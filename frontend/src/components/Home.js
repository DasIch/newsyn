/*
 *  Home
 *  ~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component } from 'react'

import loginRequired from './loginRequired'

export default loginRequired(
  class Home extends Component {
    render () {
      return <p>Home!</p>
    }
  }
)
