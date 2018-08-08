import * as constants from './constants'
import Api from '../../../app/api'
import {ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Rewarded_video} from '@app/keys'
import {Interstitial} from '@app/keys'
import {
  AdMobInterstitial,
} from 'react-native-admob'
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
export function actionPostComment(comment){
  return{
    type:constants.POST_COMMENT_DATA,
    comment,
  }
}
export function actionReward(bronze,silver,report){
  return{
    type:constants.POST_REWARD_REPORT,
    bronze,
    silver,
    report
  }
}
export function postQuestion(data){
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/postQuestion.php`,data).then(resp => {
        if(resp.status==='err'){
            ToastAndroid.show(resp.message, ToastAndroid.SHORT)
        }
        else{
          AdMobInterstitial.setAdUnitID(Interstitial);
          AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
          AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
          ToastAndroid.show(resp.message, ToastAndroid.SHORT);
          Actions.pop()
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
      })
  }
}

export function getPostedQuestion(data){
  console.log("hey json",data);
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
  console.log('hey data',data);
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
//post user's comments
export function postComment(data){
  return (dispatch,getState) => {
      return Api.post(`/postComment.php`,data).then(resp => {
        if(resp.status==='err'){
            ToastAndroid.show(resp.message, ToastAndroid.SHORT)
        }
        else{
            dispatch(actionPostComment(resp))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
      })
  }
}

export function acceptAnswer(data){
  console.log('hey data',data)
      return (dispatch,getState) => {
        return Api.post(`/acceptAns.php`,data).then(resp => {
          if(resp.status==='err'){
              ToastAndroid.show(resp.message, ToastAndroid.SHORT)
          }
          else{
            Actions.MainScreen({type:'reset',pageName:'discuss'});
          }
          console.log('--------got the response---------',resp)
        }).catch((ex) => {
          console.log('------errror-------',ex);
        })
    }
}
export function giveRewardOrReport(data){
  console.log('hey reward',data);
    return (dispatch,getState) => {
        return Api.post(`/userActionOnPost.php`,data).then(resp => {
          if(resp.status==='err'){
              ToastAndroid.show(resp.message, ToastAndroid.SHORT)
          }
          else{
              dispatch(actionReward(data.bronze,data.silver,data.report))
          }
          console.log('--------got the response---------',resp)
        }).catch((ex) => {
          console.log('------errror-------',ex);
        })
    }
}
