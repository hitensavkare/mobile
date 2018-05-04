import * as constants from './constants'
import Api from '../../../app/api'
import AsyncSetting from '../../../app/AsyncSetting'
import {Actions} from 'react-native-router-flux';
export function startRequest(){
  return{
    type: constants.START_AUTH
  };
}
export function actionGuestUser(){
  return{
    type: constants.GUEST_USER
  };
}
export function actionSetError(error){
  return{
    type: constants.RESP_ERROR,
    error,
  };
}

export function actionUserLogin(userData){
  return{
    type: constants.USER_LOGIN,
    userData,
  };
}

export function setGuestUser(data){
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/register.php`,data).then(resp => {
        if(resp.status==='err'){
          //dispatch(actionSetError())
        }
        else{
        dispatch(actionGuestUser())

        }
        //console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);

        actionSetError(ex)
      })
  }
}

export function authUser(data){
  console.log('hey data',data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/authUser.php`,data).then(resp => {
        if(resp.status==='err'){
          //dispatch(actionSetError())
          alert("Something went wrong,please try again")
        }
        else{
          AsyncSetting.setAuthenticationUserFlag('true')
          AsyncSetting.setId(resp._id)
          dispatch(actionUserLogin(resp))
          Actions.MainScreen();
            console.log('--------got the response---------',resp)
        }

      }).catch((ex) => {
        //console.log('------errror-------',ex);
        actionSetError(ex)
      })
  }
}
