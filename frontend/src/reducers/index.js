/*
 *  reducers
 *  ~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import { combineReducers } from "redux"

import user from './user'
import startup from './startup'


export const rootReducer = combineReducers({
  user,
  startup
});
