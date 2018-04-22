import * as constants from './constants'
import Api from '../../../app/api'
export function startRequest(){
  return{
    type: constants.START_REQUEST
  };
}
export function actionNotification(notifyData){
  return{
    type:constants.GET_NOTIFICATION,
    notifyData,

  }
}

//Get Data of Notifications

export function getNotification(){
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.get(`/getadmitNotification.php`).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionNotification(resp))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}
