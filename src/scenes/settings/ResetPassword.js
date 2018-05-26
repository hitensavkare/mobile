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
class ResetPassword extends Component{
  constructor(props){
    super(props)
    this.state={
      old:null,
      new:null,
      isRender:false
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
  return(
    <View style={styles.container}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Reset"/>
        <View style={styles.subContainer}>
          <Text style={styles.fontHeading}>
          Reset your Password here
          </Text>
          <TextInput
            onChangeText={(value)=>{this.setState({old:value})}}
            placeholder="Old Password"
            underlineColorAndroid={colors.appColor}
            maxLength = {32}
            multiline = {true}
            style={styles.textinput}/>
            <TextInput
              onChangeText={(value)=>{this.setState({new:value})}}
              placeholder="New Password"
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
