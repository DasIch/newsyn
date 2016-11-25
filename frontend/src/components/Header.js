/*
 *  Header
 *  ~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions'

const mapStateToProps = state => {
  const loggedIn = !!state.user.user
  return {
    loggedIn,
    loggingOut: state.user.isFetching && loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <h1>Newsyn</h1>
        {
          this.props.loggedIn
          ? <button
            onClick={this.props.logout}
            disabled={this.props.loggingOut}>Logout</button>
          : undefined
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
