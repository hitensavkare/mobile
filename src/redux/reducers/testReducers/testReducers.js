import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/testActions/constants'
const intialState={
  questionSetData:[],
  years:[],
  pdfData:[],
};

export const testReducers=createReducer(intialState,{
  [constants.START_ACTIONS](state,action){
    return Object.assign({},state,{
    })
 },
 [constants.GET_PREVIOUSE_PAPERSET](state,action){
   return Object.assign({},state,{
     questionSetData:action.paperSet
   })
},
[constants.GET_YEARS](state,action){
  return Object.assign({},state,{
    years:action.years
  })
},
[constants.GET_PDF_DATA](state,action){
  return Object.assign({},state,{
    pdfData:action.pdfData
  })
},

});
