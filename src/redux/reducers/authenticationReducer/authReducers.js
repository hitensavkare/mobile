import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/authenticationActions/constants'

const intialState={
error:null,
};

export const authenticationReducer=createReducer(intialState,{
  [constants.START_AUTH](state,action){
    return Object.assign({},state,{
    })
 },
 [constants.GUEST_USER](state,action){
   return Object.assign({},state,{
   })
},
[constants.RESP_ERROR](state,action){
  return Object.assign({},state,{
    error:action.error,
  })
},
 });
