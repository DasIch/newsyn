/*
 *  Login
 *  ~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';


const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.user.isFetching,
    isLoggedIn: !!state.user.user
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(
  class Login extends Component {
    constructor(props) {
      super(props);

      this.state = {
        email: '',
        password: ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
      if (props.isLoggedIn) {
        props.router.push('/');
      }
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.login(this.state.email, this.state.password);
      this.setState({password: ''});
    }

    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            disabled={this.props.isLoggingIn}
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            disabled={this.props.isLoggingIn}
          />
          <input
            type='submit'
            value='Login'
            disabled={this.isLoggingIn}
          />
        </form>
      );
    }
  }
)
