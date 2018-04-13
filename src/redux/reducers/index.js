import {combineReducers} from 'redux'
import * as jobReducer from './jobReducers/jobreducer'
export default combineReducers(Object.assign({},
  jobReducer,
))
