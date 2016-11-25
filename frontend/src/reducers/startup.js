/*
 *  reducers/startup
 *  ~~~~~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import * as ActionTypes from '../actions'

const startup = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.STARTUP_FINISH:
      return true
    default:
      return state
  }
}

export default startup
