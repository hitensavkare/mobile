import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/discussActions/constants'
const intialState={
  postedQuestionDataSource:[],
  commentData:[],
};

export const discussReducer=createReducer(intialState,{
  [constants.START_ACTIONS](state,action){
    return Object.assign({},state,{
    })
 },
 [constants.END_ACTIONS](state,action){
   return Object.assign({},state,{
   })
 },
 [constants.GET_POSTED_QUESTION](state,action){
   return Object.assign({},state,{
       postedQuestionDataSource:action.postedQuestionData
   })
 },
 [constants.GET_COMMENT_DATA](state,action){
   return Object.assign({},state,{
       commentData:action.commentData
   })
 },
 [constants.POST_COMMENT_DATA](state,action){
   return Object.assign({},state,{
       commentData:action.comment
   })
 },

});
