/*
 *  reducers
 *  ~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import { combineReducers } from "redux"

import * as ActionTypes from "./actions"


const user = (state = {
  isFetching: false,
  user: null,
}, action) => {
  switch (action.type) {
    case ActionTypes.USER_REQUEST:
      return {...state, isFetching: true};
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
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  user
});
