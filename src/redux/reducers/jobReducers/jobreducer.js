import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/jobActions/constants'

const intialState={
  adsSource:[],
  isLogin:false,
  subResp:[],
  singleJobResp:null,
};

export const jobReducer=createReducer(intialState,{
  [constants.ADVERTISE_DATA](state,action){
    return Object.assign({},state,{
      adsSource:action.resp
    })
 },
 [constants.ADVERTISE_SUB_DATA](state,action){
   return Object.assign({},state,{
     subResp:action.subResp
   })
},

[constants.GET_SINGLE_JOB](state,action){
  return Object.assign({},state,{
    singleJobResp:action.singleJobResp
  })
},
[constants.SEARCH_JOBS](state,action){
  return Object.assign({},state,{
    adsSource:action.searchJob
  })
},

});
