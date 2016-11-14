/*
 *  reducers/user
 *  ~~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import * as ActionTypes from "../actions"


const user = (state = {
  isFetching: false,
  user: null,
}, action) => {
  switch (action.type) {
    case ActionTypes.USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined
    };
    case ActionTypes.USER_RECEIVED:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case ActionTypes.USER_FAILED:
      return {
        ...state,
        isFetching: false
      };
    case ActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: undefined
      };
    case ActionTypes.USER_LOGIN_RECEIVED:
      return {
        ...state,
        isFetching: false,
        user: action.user
      };
    case ActionTypes.USER_LOGIN_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default user;
