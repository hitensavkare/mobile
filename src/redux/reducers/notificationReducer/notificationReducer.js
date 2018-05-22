import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/notificationActions/constants'

const intialState={
  notificationData:[],
};

export const notificationReducer=createReducer(intialState,{
  [constants.START_REQUEST](state,action){
    return Object.assign({},state,{

    })
 },
  [constants.GET_NOTIFICATION](state,action){
    return Object.assign({},state,{
      notificationData:action.notifyDataa
    })
 },
 });
