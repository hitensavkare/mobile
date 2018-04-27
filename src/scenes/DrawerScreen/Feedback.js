import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './DrawerScreen.styles'
import {images,colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderDrawer from './HeaderDrawer'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class Feedback extends Component{
  constructor(props){
    super(props)
    this.state={
      feedback:null,
      isRender:false
    }
  }
  _sendFeedback(){
    this.setState({
      isRender:true
    })
    this.props.getFeedback({feedback:this.state.feedback}).then(()=>{
      {
        this.setState({
          isRender:false
        })
        Actions.pop()

      }
    })
  }

  render(){
  return(
    <View style={styles.container}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Feedback"/>
        <View style={styles.subContainer}>
          <Text style={styles.fontHeading}>
            Your feedback is valueable from us,please write us here
          </Text>
          <TextInput
            onChangeText={(value)=>{this.setState({feedback:value})}}
            placeholder="Write your Feedback Here"
            underlineColorAndroid={colors.appColor}
            maxLength = {180}
            multiline = {true}
            style={styles.textinput}/>
            <TouchableOpacity onPress={()=>{this._sendFeedback()}} style={styles.submitButton}>
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
export default connect(mapDispatchToProps,mapDispatchToProps)(Feedback);
