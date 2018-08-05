import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  CheckBox,
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
class ResetPassword extends Component{
  constructor(props){
    super(props)
    this.state={
      old:null,
      new:null,
      isRender:false,
      checked:false,
    }
  }
  _sendPassword(){
    this.setState({
      isRender:true
    })
      AsyncStorage.getItem('id').then((value)=>{
        this.props.resetPassword({id:value,old:this.state.old,new:this.state.new}).then(()=>{
      {
        this.setState({
          isRender:false
        })
      }
    })
  });
  }

  render(){
    const{checked}=this.state;
  return(
    <View style={styles.container}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Reset"/>
        <View style={styles.subContainer}>
          <View>
            <CheckBox
              value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
          </View>
          <Text style={styles.fontHeading}>
        I want to set my existing fb/google account password for this application
          </Text>
          <TextInput
            onChangeText={(value)=>{this.setState({old:value})}}
            placeholder={checked===true?'New Password':"Old Password"}
            underlineColorAndroid={colors.appColor}
            maxLength = {32}
            multiline = {true}
            style={styles.textinput}/>
            <TextInput
              onChangeText={(value)=>{this.setState({new:value})}}
              placeholder={checked===true?'Confirm Password':"New Password"}
              underlineColorAndroid={colors.appColor}
              maxLength = {32}
              multiline = {true}
              style={styles.textinput}/>
            <TouchableOpacity onPress={()=>{this._sendPassword()}} style={styles.submitButton}>
              <Text style={styles.submitText}>
                SUBMIT
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
export default connect(mapDispatchToProps,mapDispatchToProps)(ResetPassword);
