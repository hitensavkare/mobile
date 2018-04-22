import * as constants from './constants'
import Api from '../../../app/api'
export function startRequest(){
  console.log('called');
  return{
    type: constants.START_REQUEST
  };
}

export function getAdvertise(resp){
  return{
    type: constants.ADVERTISE_DATA,
    resp,
  }
}
export function getSubAds(subResp){
  return{
    type:constants.ADVERTISE_SUB_DATA,
    subResp,
  }
}
export function actionGetSingleJob(singleJobResp){
  return{
    type:constants.GET_SINGLE_JOB,
    singleJobResp,
  }
}


//Get Master Ads
export function getAds(){
  return (dispatch,getState) => {
  //  dispatch(startRequest())
      return Api.get(`/getMasterJob.php`).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(getAdvertise(resp))
       // dispatch(registerDone(false))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}

//Get Sub jobs based on selection
export function getSubJobs(id){
  return (dispatch,getState) => {
  //  dispatch(startRequest())
      return Api.post(`/getSubJob.php`,id).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(getSubAds(resp))
       // dispatch(registerDone(false))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}
export function getSingleJob(id){
  return (dispatch,getState) => {
  //  dispatch(startRequest())
      return Api.post(`/getSingleJobView.php`,id).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionGetSingleJob(resp))
       // dispatch(registerDone(false))
        }
        console.log('--------got the response---------',resp)
      }).catch((ex) => {
        console.log('------errror-------',ex);
        //authFailure(ex,false,false)
      })
  }
}
