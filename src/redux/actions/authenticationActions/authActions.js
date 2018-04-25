import * as constants from './constants'
import Api from '../../../app/api'
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
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        //console.log('------errror-------',ex);
        actionSetError(ex)
      })
  }
}
