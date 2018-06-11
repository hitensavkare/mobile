import * as constants from './constants'
import Api from '../../../app/api'
import AsyncSetting from '../../../app/AsyncSetting'
import {Actions} from 'react-native-router-flux';
import {ToastAndroid} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import FBSDK,{LoginManager,AccessToken} from 'react-native-fbsdk'
var PushNotification = require('react-native-push-notification');
export function startRequest(){
  return{
    type: constants.START_REQUEST
  };
}
export function startAuth(isLoading){
  return{
    type: constants.START_AUTH,
    isLoading
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
export function actionForgotPassword(){
  return{
    type:constants.FORGOT_PASSWORD
  }
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

export function registerUser(data){
  console.log(data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/register.php`,data).then(resp => {
        if(resp.status==='err'){
          alert(resp.message)
        }
        else{
          PushNotification.localNotification({
            ticker: "My Notification Ticker",
            autoCancel: true, // (optional) default: true
            largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
            smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
            title: "Verify Email", // (optional)
            message: "Login credentials sent on your email id, please check it.", // (required)
            soundName: 'default',
          })
          Actions.Login({type:'reset'});
        }
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
          alert(resp.message)
        }
        else{
          AsyncSetting.setAuthenticationUserFlag('true')
          AsyncSetting.setId(resp._id)
            AsyncSetting.setUrl(resp.url)
          //  alert(resp.url)
          dispatch(actionUserLogin(resp))
          Actions.MainScreen({type:'reset'});
            console.log('--------got the response---------',resp)
        }

      }).catch((ex) => {
        //console.log('------errror-------',ex);
        actionSetError(ex)
      })
  }
}

export function getProfileInfo(data){
  console.log('hey data',data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/getProfile.php`,data).then(resp => {
        if(resp.status==='err'){
          //dispatch(actionSetError())
          alert(resp.message)
        }
        else{
          //AsyncSetting.setAuthenticationUserFlag('true')
        //  AsyncSetting.setId(resp._id)
          AsyncSetting.setUrl(resp.url)
          //  alert(resp.url)
          dispatch(actionUserLogin(resp))

            console.log('--------got the response---------',resp)
        }

      }).catch((ex) => {
        //console.log('------errror-------',ex);
        actionSetError(ex)
      })
  }
}
export function updateProfile(data){
  console.log('hey data',data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/updateProfile.php`,data).then(resp => {
        if(resp.status==='err'){
          //dispatch(actionSetError())
          alert(resp.message)
        }
        else{
          //AsyncSetting.setAuthenticationUserFlag('true')
        //  AsyncSetting.setId(resp._id)
          AsyncSetting.setUrl(resp.url)
          Actions.MainScreen({type:'reset'});
          //  alert(resp.url)
            console.log('--------got the response---------',resp)
        }

      }).catch((ex) => {
        //console.log('------errror-------',ex);
        actionSetError(ex)
      })
  }
}

//forgot password
export function forgotPassword(data){
  console.log('hey data',data);
  return (dispatch,getState) => {
      dispatch(startRequest())
      return Api.post(`/forgotPassowrd.php`,data).then(resp => {
        if(resp.status==='err'){
          //dispatch(actionSetError())
          alert(resp.message)
        }
        else{
            dispatch(actionForgotPassword());
            ToastAndroid.show(resp.message, ToastAndroid.SHORT);
            Actions.pop();
            console.log('--------got the response---------',resp)
        }

      }).catch((ex) => {
        actionSetError(ex)
      })
  }
}
//Facebook authentication
export function fbAuth(token){
  return (dispatch) => {
    console.log('hey started i am');
    LoginManager.logInWithReadPermissions(['email','user_birthday'])
    .then(function(result){
      if(result.isCancelled){
      //    dispatch(authFailureRemove());
      }
      else{
        AccessToken.getCurrentAccessToken().then((data) => {
          //dispatch(authStarted(true));
         const { accessToken } = data
         console.log('--------token obtain------',accessToken);
         fetch('https://graph.facebook.com/v2.5/me?fields=picture.height(2048),birthday,name,email,gender&access_token=' + accessToken)
         .then((response) => response.json())
         .then((json) => {
            console.log("get the fb data",json);
           const dataT={pushToken:token,deviceId:DeviceInfo.getUniqueID(),fullname:json.name,mail:json.email,profilepic:json.picture.data.url,gender:'',birthDay:json.birthday,provider:'Facebook'}

           return Api.post(`/register.php`,dataT).then(resp => {
             console.log('response',resp);
             AsyncSetting.setAuthenticationUserFlag('true')
             AsyncSetting.setId(resp._id)
               AsyncSetting.setUrl(resp.url)
              // alert(resp.url)
             dispatch(actionUserLogin(resp))
              Actions.MainScreen();
           })

         })
       })
      }
    }).catch((ex) => {
      console.log('------errror-------',ex);
    //  authFailure(ex,false,false)
    });

  }

}

//Google authentication
export function googleAuth(token){
  return (dispatch) => {
//dispatch(authStarted(false,true));
GoogleSignin.configure({
      //iosClientId:'279628207670-7782ko2r54602h3lajalu7t18hoq6q4o.apps.googleusercontent.com',
      webClientId:'111940073926-eo8tv8galghggqcvli2qko45lcu8g52q.apps.googleusercontent.com'
    }).then(()=>{

       GoogleSignin.signIn()
            .then((user) => {
              console.log('----google response-------------',user);
              //dispatch(authSuccess(true,user.name,user.photo,true));
              const dataT={pushToken:token,deviceId:DeviceInfo.getUniqueID(),fullname:user.name,mail:user.email,profilepic:user.photo,gender:null,birthDay:null,provider:'Google'}
              console.log('dataT',dataT)

              return Api.post(`/register.php`,dataT).then(resp => {
                console.log('response',resp);
                AsyncSetting.setAuthenticationUserFlag('true')
                AsyncSetting.setId(resp._id)
                  AsyncSetting.setUrl(resp.url)
                //  alert(resp.url)
                dispatch(actionUserLogin(resp))
                 Actions.MainScreen({type:'reset'});
              })

              /*return Api.post(`/mobileSocialLogin`,dataT).then(respData => {
                dispatch(authSuccess(true,user.name,user.photo,null,null,'google','therapist',respData.authToken,user.email,null));
                Actions.Home({ type:'reset',isUnsheduleVisible:false,selectedPage:'First', flag:'month'})
              })*/
            })
            .catch((err) => {
                console.log('------errror-------',ex);
            //dispatch(authFailure(err,false,false));
            }).done();
    })
  }
}
