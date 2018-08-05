import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Button,CardItem} from 'native-base'
import HeaderLogin from './HeaderLogin'
import {Actions} from 'react-native-router-flux';
import {images,colors} from '../../theme'
import styles from './AppLogin.style'
import Statusbar from '../../components/Statusbar'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
let  token=null;
import keys from '../../app/keys'
var PushNotification = require('react-native-push-notification');
import Loader from '@components/Loader'
class AppLogin extends Component{
  constructor(props){
    super(props)
    this.state={
      email:null,
      password:null,
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
  _fbAuth=()=>{
    this.props.fbAuth(token)
  }
  _goToRegister(){
    Actions.Register();
  }
  _goToForgerPassword(){
    Actions.ForgotPassword()
  }
  _gotoHomeMainWithLoginScreen(){
    this.setState({
      loading:true
    })
   this.props.authUser({email:this.state.email,password:this.state.password}).then(()=>{
     this.setState({
       loading:false
     })
   })
  }
  render(){
      //alert('hey user ' +this.props.isLoading)
    return(
      <View  style={styles.container}>
          <Statusbar/>
        <HeaderLogin onPress={()=>{Actions.pop()}} pageName='Login'/>
        <ScrollView>
           <View style={styles.subContainer}>
             <View style={styles.headView}>
               <Text style={styles.headeFont}>JobSarthi</Text>
             </View>
             <View style={styles.inputView}>
               <TextInput
                 onChangeText={(email)=>{this.setState({email})}}
                 placeholder="Email" style={styles.textInput}/>
              <TextInput placeholder="Password"
                 onChangeText={(password)=>{this.setState({password})}}
              secureTextEntry={true} />
             </View>
             <View style={styles.loginView}>
               <Button light style={styles.loginButton} onPress={()=>{this._gotoHomeMainWithLoginScreen()}}  >
                 <Text style={styles.loginText}>
                   LOGIN
                 </Text>
               </Button>
             </View>
             <Loader
             loading={this.props.isLoading} />
             <View style={styles.forgetPassView}>
               <Text style={styles.forgetPass} onPress={() => this._goToForgerPassword()}>Forgot Password?</Text>
             </View>

             <View style={styles.buttonMainView}>
               <View style={styles.buttonView}>
                 <Button onPress={this._fbAuth} light style={styles.socialButtons}>
                   <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                     <Image source={images.iconFacebook} style={styles.fbIcon}/>
                   </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                     <Text style={styles.fbIconText}>
                       FACEBOOK
                     </Text>
                   </View>
                 </Button>
                 <Button onPress={()=>{this.props.googleAuth(token)}} light style={styles.socialButtons2}>
                   <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                     <Image source={images.iconGoogle} style={styles.googleIcon}/>
                   </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                     <Text style={styles.googleIconText}>
                       GOOGLE
                     </Text>
                   </View>
                 </Button>
               </View>
             </View>
             <CardItem style={styles.cardView}>
               <View style={{flex:1,marginLeft:-10,marginRight:-10}}>
                 <View style={styles.viewFooterOFRegistration}>

                   <View style={styles.textRegisterInstruction}>
                     <Text style={styles.registerInstrctiontext}>New To the App?</Text>
                     <Text style={styles.registerInstrctiontext}>Create An Account</Text>
                   </View>

                   <View style={styles.bedgeView}>
                     <View style={{flex:1.5,alignItems:'flex-end',justifyContent:'center'}}>
                       <Text style={styles.registerText}>REGISTER</Text></View>
                       <TouchableOpacity onPress={()=>{this._goToRegister()}} style={styles.circle}>
                         <View >
                          <Image source={images.iconRegister} style={styles.badgeImage}/>
                         </View>
                       </TouchableOpacity>
                     </View>

                   </View>
                 </View>
               </CardItem>
             </View>
           </ScrollView>

      </View>
    )
  }
}

const mapStateToProps=state=>{
  return{
   isLoading:state.authenticationReducer.loading
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AppLogin);
