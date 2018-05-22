import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  Modal,
} from 'react-native';
import {Button} from 'native-base';
import HeaderLogin from './HeaderLogin'
import {Actions} from 'react-native-router-flux';
import styles from './Register.style'
import {images,colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
let  token=null;
import keys from '../../app/keys'
import Loader from '@components/Loader'
var PushNotification = require('react-native-push-notification');
class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      gender:'NA',
      education:'NA',
      modalVisible:false,
      email:'',
      avatarSource:null,
      avtarbase64:null,
      name:'',
      isEmailFormatValid:null,
      loading:false,

    }
    PushNotification.configure({
      senderID:keys.push_notification_sender_id,
    // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(push_token) {
      token=push_token.token
      console.log('notification token',push_token)
      },
      onNotification: function(notification) {
      //console.log( 'NOTIFICATION Received:', notification );
    },
  })
  }
  //code for email validation
  _validateEmail(email){
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(email==='')
  {
      this.setState({email:null,isEmailFormatValid:null})
      this.refs.MyEmail.focus();
      return false;
  }
  else if(reg.test(email) === false)
  {

    this.setState({isEmailFormatValid:false})
    this.refs.MyEmail.focus();
    return false;
  }
  else{
      this.setState({isEmailFormatValid:true,email:email})
      return true;
  }
}
_renderEmailError(){
  if(this.state.isEmailFormatValid===false){
    return(
       <Text style={styles.errorMessage}>Invalid Email Formate</Text>
    )
  }
  else if(this.state.email===null){
    return(
       <Text style={styles.errorMessage}>Field cannot be empty.</Text>
    )
  }
}

//validation for name
_validateName(name){
  if(name===''){
      this.refs.name.focus();
    this.setState({name:null})
    return false;
  }
  else{
      this.setState({name:name})
      return true
  }
}
//render name error
_renderNameError(){
  if(this.state.name===null){
    return(
       <Text style={styles.errorMessage}>Field cannot be empty</Text>
    )
  }
}

  _renderCamera(){
    this._toggleModal(!this.state.modalVisible)
    ImagePicker.openCamera({
      compressImageMaxWidth:300,
      compressImageMaxHeight:100,
      compressImageQuality:0.80,
      includeBase64:true,
    }).then(response=>{
      let avtarbase64='data:'+response.mime+';base64,'+response.data;
      this.setState({avatarSource:response.path,
        avtarbase64,
      })
    })
    console.log(this.state.avtarbase64)


  }
  _renderGallary(){
    this._toggleModal(!this.state.modalVisible)
    ImagePicker.openPicker({
      compressImageMaxWidth:300,
      compressImageMaxHeight:100,
      compressImageQuality:0.80,
      includeBase64:true,
    }).then(response => {
      let data=[];
      console.log('--------data type array-----',response)
      let avtarbase64='data:'+response.mime+';base64,'+response.data;
      this.setState({ avtarbase64:avtarbase64,
        avatarSource:response.path})
      console.log('your bas64',this.state.avtarbase64)
    });

  }
  _toggleModal(visible){
    this.setState({modalVisible:visible})
  }

  _renderChooseAvatarModal(){
  return(
      <Modal animationType={"slide"} onRequestClose={() => null} transparent={true} visible={this.state.modalVisible}>
        <View style={styles.modelMainView}>
          <View style={styles.modelContainer}>
            <TouchableOpacity onPress={()=>{this._renderCamera()}}>
              <View style={styles.modelImageViews} >
                <Image style={styles.modelCameraAvatar} source={images.iconCamera}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.modeltext}>Camera</Text>
          </View>

          <View style={styles.modelContainer}>
            <TouchableOpacity onPress={()=>{this._renderGallary()}}>
              <View style={styles.modelImageViews} >
                <Image style={styles.modelGallaryAvatar} source={images.iconGallary}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.modeltext}>Gallary</Text>
          </View>
          <View style={styles.modelContainer}>
            <TouchableOpacity onPress={() => {
              this._toggleModal(!this.state.modalVisible)
            }}>
            <View style={styles.modelImageViews} >
              <Image style={styles.modelCancelAvatar} source={images.iconClose}/>
          </View>
          </TouchableOpacity>
          <Text style={styles.modeltext}>Cancel</Text>
        </View>
      </View>
    </Modal>
  )
}

_gotoHomeMainWithLoginScreen(){
  if(this._validateName(this.state.name)===true && this._validateEmail(this.state.email)===true && this.state.gender!=='NA' && this.state.education!=='NA'){
    this.setState({
      loading:true
    })
    let data={profilepic:this.state.avtarbase64,provider:"inApp",pushToken:token,deviceId:DeviceInfo.getUniqueID(),mail:this.state.email,fullname:this.state.name,gender:this.state.gender,education:this.state.education}
    this.props.registerUser(data).then(()=>{
      this.setState({
        loading:false
      })
    })
  }
  else if(this.state.gender==='NA' && this.state.education==='NA'){
    alert('You are missing something, please fill all details')
  }

}
  render(){
    return(
      <View style={styles.container}>
          <Statusbar/>
          <HeaderLogin onPress={()=>{Actions.pop()}} pageName='Register'/>
          <View style={styles.subContainer}>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.profileimgContainer} onPress={()=>{this._toggleModal(!this.state.modalVisible)}}>
                {this.state.avatarSource===null?
                  <Image source={images.profileImage} style={styles.profileImg}/>
                  :
                  <Image source={{uri:this.state.avatarSource}} style={styles.profileImg}/>
                }

              </TouchableOpacity>
              <View style={styles.nameContainer}>
                <TextInput placeholder='Your Name'
                    ref='name'
                  placeholderTextColor={colors.gray}
                  style={styles.textInput}
                  onChangeText={(name)=>{this._validateName(name)}}
                 />
                 {this._renderNameError()}
              </View>
            </View>
            <View style={styles.singleRecord}>
              <TextInput placeholder='Your Email'
                ref='MyEmail'
                onChangeText={(email)=>{this._validateEmail(email)}}
                placeholderTextColor={colors.gray}
                style={styles.textInput}
               />
               {this._renderEmailError()}
            </View>
            <View style={styles.singleRecord}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                <Picker.Item label="Your Gender" value="NA" />
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
              </Picker>
            </View>
            <View style={styles.singleRecord}>
              <Picker
                selectedValue={this.state.education}
                onValueChange={(itemValue, itemIndex) => this.setState({education: itemValue})}>
                <Picker.Item label="I am" value="NA" />
                <Picker.Item label="Doctorate" value="Doctorate" />
                <Picker.Item label="Post-Graduate" value="Post-Graduate" />
                <Picker.Item label="Graduate" value="Graduate" />
                <Picker.Item label="12th pass" value="12th pass" />
                <Picker.Item label="10th pass" value="10th pass" />
              </Picker>
            </View>

            <View style={styles.registerView}>
              <Button light style={styles.registerButton} onPress={()=>{this._gotoHomeMainWithLoginScreen()}}  >
                <Text style={styles.loginText}>
                  REGISTER
                </Text>
              </Button>
            </View>
              {this.state.loading===true?<Loader/>:null}
          </View>
           {this._renderChooseAvatarModal()}
      </View>
    )
  }
}

const mapStateToProps=state=>{
  return{
    adsSource:state.jobReducer.adsSource,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);
