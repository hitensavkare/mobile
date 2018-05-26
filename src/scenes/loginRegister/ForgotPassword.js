import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../DrawerScreen/DrawerScreen.styles'
import {images,colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderDrawer from '../DrawerScreen/HeaderDrawer'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class ForgotPassword extends Component{
  constructor(props){
    super(props)
    this.state={
      email:null,
      isRender:false
    }
  }
  _sendPassword(){
    this.setState({
      isRender:true
    })
      this.props.forgotPassword({email:this.state.email}).then(()=>{
        this.setState({
          isRender:false
        })
      });
  }

  render(){
  return(
    <View style={styles.container}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Forgot Password"/>
        <View style={styles.subContainer}>
          <Text style={styles.fontHeading}>
            Forgot your password? Enter your email and get password
          </Text>
          <TextInput
            onChangeText={(email)=>{this.setState({email})}}
            placeholder="enter your registered email"
            underlineColorAndroid={colors.appColor}
            maxLength = {180}
            style={styles.textinput}/>
            <TouchableOpacity onPress={()=>{this._sendPassword()}} style={styles.submitButton}>
              <Text style={styles.submitText}>
                REQUEST
              </Text>
            </TouchableOpacity>
            {this.state.isRender===true?<Loader/>:null}
        </View>
    </View>
    )
  }
}
const mapStateToProps=state=>{
  return{

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapDispatchToProps,mapDispatchToProps)(ForgotPassword);
