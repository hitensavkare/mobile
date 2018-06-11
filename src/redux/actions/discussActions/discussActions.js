import * as constants from './constants'
import Api from '../../../app/api'
import {ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
export function startRequest(){
  return{
    type: constants.START_ACTIONS
  };
}
export function endAction(){
  return{
    type: constants.END_ACTIONS
  };
}

export function actionGetPostedQuestion(postedQuestionData){
  return{
    type:constants.GET_POSTED_QUESTION,
    postedQuestionData,
  };
}
export function actionGetComments(commentData){
  return{
    type:constants.GET_COMMENT_DATA,
    commentData,
  }
}

export function postQuestion(data){
  console.log('hey postQuestion',data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/postQuestion.php`,data).then(resp => {
        if(resp.status==='err'){
            ToastAndroid.show(resp.message, ToastAndroid.SHORT)
        }
        else{
          ToastAndroid.show(resp.message, ToastAndroid.SHORT);
            dispatch(endAction())
          Actions.pop()
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
      })
  }
}

export function getPostedQuestion(data){
  return (dispatch,getState) => {
      return Api.post(`/getPostedQuestionList.php`,data).then(resp => {
        if(resp.status==='err'){
            ToastAndroid.show(resp.message, ToastAndroid.SHORT)
        }
        else{
            dispatch(actionGetPostedQuestion(resp))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
      })
  }
}

export function getComments(data){
  return (dispatch,getState) => {
      return Api.post(`/getComments.php`,data).then(resp => {
        if(resp.status==='err'){
            ToastAndroid.show(resp.message, ToastAndroid.SHORT)
        }
        else{
            dispatch(actionGetComments(resp))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
      })
  }
}
