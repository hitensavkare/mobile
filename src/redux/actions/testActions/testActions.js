import * as constants from './constants'
import Api from '../../../app/api'
export function startRequest(){
  return{
    type: constants.START_ACTIONS
  };
}
export function actionGetQuestionSets(paperSet){
  return{
    type:constants.GET_PREVIOUSE_PAPERSET,
    paperSet,

  }
}
export function actionGetYears(years){
  return{
    type:constants.GET_YEARS,
    years
  }
}
export function actionGetPdfs(pdfData){
  return{
    type:constants.GET_PDF_DATA,
    pdfData
  }
}

export function actionGetTestSet(questionSetData){
  return{
    type:constants.GET_QUESTION_SET,
    questionSetData
  }
}

export function actionGetPracticeQuestion(practiceQuestion){
  return{
    type:constants.GET_PRACTICE_EXAM,
    practiceQuestion,
  }
}
export function getQuestionPaperSets(data){
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/getQuestionPaperTag.php`,data).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionGetQuestionSets(resp))
        }
      }).catch((ex) => {
        //authFailure(ex,false,false)
      })
  }
}

export function getYears(data){
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/year.php`,data).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionGetYears(resp))
        }
      }).catch((ex) => {
        //authFailure(ex,false,false)
      })
  }
}
export function getPdfs(data){
  console.log('hey action',data);
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/year.php`,data).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionGetPdfs(resp))
        }
      }).catch((ex) => {
        //authFailure(ex,false,false)
      })
  }
}
//get Question set
export function getQuestionTestSet(data){
  console.log('hey action',data);
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/getQuestionSet.php`,data).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionGetTestSet(resp))
        }
      }).catch((ex) => {
        //authFailure(ex,false,false)
      })
  }
}

//getting the practice TestList

export function getPracticeExam(data){
  console.log('hey action',data);
  return (dispatch,getState) => {
       dispatch(startRequest())
      return Api.post(`/getQuestionData.php`,data).then(resp => {
        if(resp.status==='Error'){
          //dispatch(loginFailed(null,false,resp.message))
        }
        else{
        dispatch(actionGetPracticeQuestion(resp))
        }
      }).catch((ex) => {
        //authFailure(ex,false,false)
      })
  }
}
