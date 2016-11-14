/*
 *  actions/user
 *  ~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import APIClient from '../api-client';


export const USER_REQUEST = 'USER_REQUEST';
const requestUser = () => {
  return {type: USER_REQUEST};
};


export const USER_RECEIVED = 'USER_RECEIVED';
const receivedUser = (user) => {
  return {
   type: USER_RECEIVED,
   user
  };
};


export const USER_FAILED = 'USER_FAILED';
const failedUser = (error) => {
  return {
    type: USER_FAILED,
    error
  };
};


export const fetchUser = () => {
  return dispatch => {
    dispatch(requestUser());
    return APIClient
      .then(client => client.getAuthenticatedUser())
      .then(user => dispatch(receivedUser(user)))
      .catch(error => dispatch(failedUser(error)));
  };
};


export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const requestUserLogin = () => {
  return {type: USER_LOGIN_REQUEST};
};


export const USER_LOGIN_RECEIVED = 'USER_LOGIN_RECEIVED';
const receivedUserLogin = (user) => {
  return {
    type: USER_LOGIN_RECEIVED,
    user
  };
};


export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
const failedUserLogin = (error) => {
  return {
    type: USER_LOGIN_FAILED,
    error
  };
};


export const login = (email, password) => {
  return dispatch => {
    dispatch(requestUserLogin());
    return APIClient
      .then(client => client.login(email, password))
      .then(() => dispatch(receivedUserLogin({ email })))
      .catch(error => dispatch(failedUserLogin(error)));
  };
};
