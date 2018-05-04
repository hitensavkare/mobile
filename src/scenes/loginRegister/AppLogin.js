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

class AppLogin extends Component{
  constructor(props){
    super(props)
    this.state={
      email:null,
      password:null,
    }
  }
  _goToRegister(){
    Actions.Register();
  }
  _goToForgerPassword(){
    alert('clicked forget password')
  }
  _gotoHomeMainWithLoginScreen(){
   this.props.authUser({email:this.state.email,password:this.state.password})
  }
  render(){
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
             <View style={styles.forgetPassView}>
               <Text style={styles.forgetPass} onPress={() => this._goToForgerPassword()}>Forgot Password?</Text>
             </View>

             <View style={styles.buttonMainView}>
               <View style={styles.buttonView}>
                 <Button light style={styles.socialButtons}>
                   <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
                     <Image source={images.iconFacebook} style={styles.fbIcon}/>
                   </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                     <Text style={styles.fbIconText}>
                       FACEBOOK
                     </Text>
                   </View>
                 </Button>
                 <Button light style={styles.socialButtons2}>
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
    adsSource:state.jobReducer.adsSource,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AppLogin);
