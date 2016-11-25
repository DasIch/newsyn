/*
 *  loginRequired
 *  ~~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component, PropTypes } from 'react'

const loginRequired = (WrappedComponent) => {
  class LoginRequired extends Component {
    constructor (props, context) {
      super(props)

      this.router = context.router
      this.store = context.store
      this.unsubscribe = this.store.subscribe(this.handleChange.bind(this))
      this.state = this.store.getState()
    }

    handleChange () {
      this.setState(this.store.getState())
    }

    ensureAuthentication () {
      const loggedIn = !this.state.user.isFetching && !!this.state.user.user
      if (!loggedIn) {
        this.router.replace('/login/')
      }
    }

    componentWillMount () {
      this.ensureAuthentication()
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    componentWillUpdate () {
      this.ensureAuthentication()
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }
  LoginRequired.contextTypes = {
    store: PropTypes.object,
    router: PropTypes.object
  }
  return LoginRequired
}

export default loginRequired
