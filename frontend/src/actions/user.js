/*
 *  actions/user
 *  ~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import APIClient from '../api-client'

export const USER_REQUEST = 'USER_REQUEST';
export const USER_RECEIVED = 'USER_RECEIVED';


const requestUser = () => {
 return {type: USER_REQUEST};
}


const receivedUser = (user) => {
 return {
   type: USER_RECEIVED,
   user
 };
}


export const fetchUser = () => {
 return dispatch => {
   dispatch(requestUser());
   return APIClient
     .then(client => client.getAuthenticatedUser())
     .then(user => dispatch(receivedUser(user)));
 }
}
