import {combineReducers} from 'redux'
import * as jobReducer from './jobReducers/jobreducer'
import * as notifyReducer from './notificationReducer/notificationReducer'
export default combineReducers(Object.assign({},
  jobReducer,
  notifyReducer,
))
