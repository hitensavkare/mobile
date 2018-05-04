import {combineReducers} from 'redux'
import * as jobReducer from './jobReducers/jobreducer'
import * as notifyReducer from './notificationReducer/notificationReducer'
import * as authenticationReducer from './authenticationReducer/authReducers'
import * as otherReducer from './otherReducers/otherReducer'
import * as testReducers from './testReducers/testReducers'
export default combineReducers(Object.assign({},
  jobReducer,
  notifyReducer,
  authenticationReducer,
  otherReducer,
  testReducers
))
