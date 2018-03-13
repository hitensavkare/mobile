import createReducer from '../../lib/createReducer';
import * as constant from '../actions/constants'

export const appTest=createReducer(0,{
  [constant.TEST](state,action){
    return state
  },
  })
