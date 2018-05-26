import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/otherActions/constants'
const intialState={
};

export const otherReducer=createReducer(intialState,{
  [constants.START_ACTIONS](state,action){
    return Object.assign({},state,{

    })
 },
 [constants.GET_FEEDBACK](state,action){
   return Object.assign({},state,{

   })
},
[constants.SET_QUERY](state,action){
  return Object.assign({},state,{

  })
},
[constants.CHANGE_PASSWORD](state,action){
  return Object.assign({},state,{

  })
},

 });
