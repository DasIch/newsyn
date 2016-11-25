/*
 *  actions/startup
 *  ~~~~~~~~~~~~~~~
 *
 *  :copyright: 2016 by Daniel Neuhäuser
 */
import { fetchUser } from './user'

export const STARTUP_BEGIN = 'STARTUP_BEGIN'
const beginStartup = () => {
  return {
    type: STARTUP_BEGIN
  }
}

export const STARTUP_FINISH = 'STARTUP_FINISH'
const finishStartup = () => {
  return {
    type: STARTUP_FINISH
  }
}

export const startup = () => {
  return dispatch => {
    dispatch(beginStartup())
    return fetchUser()(dispatch)
      .then(() => dispatch(finishStartup()))
  }
}
