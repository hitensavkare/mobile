import * as constants from './constants'
import Api from '../../../app/api'
import {ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux';
export function startRequest(){
  return{
    type: constants.START_ACTIONS
  };
}
export function actionGetFeedback(){
  return{
    type: constants.START_ACTIONS
  };
}
export function actionSendQuery(){
  return{
    type: constants.SET_QUERY
  };
}
export function actionChangePass(){
  return{
      type: constants.CHANGE_PASSWORD
  }
}
export function getFeedback(data){
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/feedback.php`,data).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
          alert('Check Internet connection');
        }
        else{
        dispatch(actionGetFeedback())
        ToastAndroid.show('Thank you for your feedback.', ToastAndroid.SHORT);
        Actions.pop()

        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}

export function sendQuery(data){
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/contactUs.php`,data).then(resp => {
        if(resp.status==='err'){
          //dispatch(loginFailed(null,false,resp.message))
          alert('Check Internet connection');
        }
        else{
        dispatch(actionSendQuery())
        ToastAndroid.show('Thank you,We will contact you shortly.', ToastAndroid.SHORT);
        Actions.pop()
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}

export function resetPassword(data){
  console.log('hey data',data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/resetPassword.php`,data).then(resp => {
        if(resp.status==='err'){
          alert(resp.message)
        }
        else{
            ToastAndroid.show(resp.message, ToastAndroid.SHORT);
            Actions.pop();
            console.log('--------got the response---------',resp)
        }

      }).catch((ex) => {
        console.log(ex);
//        actionSetError(ex)
      })
  }
}
