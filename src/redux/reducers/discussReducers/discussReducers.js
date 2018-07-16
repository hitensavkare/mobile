import createReducer from '../../../app/createReducer'
import * as constants from '../../actions/discussActions/constants'
const intialState={
  postedQuestionDataSource:[],
  commentData:[],
  isAccepted:null,
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
   if (action.commentData.some(e => e.isAccepted === 'true')) {
     console.log('hey you fond it');
     return Object.assign({},state,{
        isAccepted:'true',
       commentData:action.commentData
     })
   }
   else{
      console.log('hey you not fond it');
     return Object.assign({},state,{
       isAccepted:'false',
       commentData:action.commentData,

     })
   }
 },
 [constants.POST_COMMENT_DATA](state,action){
   return Object.assign({},state,{
       commentData:action.comment
   })
 },
 [constants.POST_REWARD_REPORT](state,action){
   return Object.assign({},state,{
   })
 },
});
