import {combineReducers} from 'redux'
import * as jobReducer from './jobReducers/jobreducer'
import * as notifyReducer from './notificationReducer/notificationReducer'
import * as authenticationReducer from './authenticationReducer/authReducers'
export default combineReducers(Object.assign({},
  jobReducer,
  notifyReducer,
  authenticationReducer,
))
