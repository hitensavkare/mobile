import * as constants from './constants'
import Api from '../../../app/api'

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
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}
