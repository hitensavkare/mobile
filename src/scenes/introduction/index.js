import React, {Component} from 'react';
import {View, Platform, Dimensions, TouchableOpacity,StatusBar,AsyncStorage} from 'react-native';
import {colors} from '../../theme'
import {Button, Text} from 'native-base';
import Carousel from '../../lib/Carousel';
import {Actions} from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import styles from './Intro.styles'
const {width, height} = Dimensions.get('window');
import Statusbar from '../../components/Statusbar'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
var PushNotification = require('react-native-push-notification');
import keys from '../../app/keys'
import AsyncSetting from '../../app/AsyncSetting'
let token='';
class Intro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: {
        width,
        height
      }
    };
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

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({
      size: {
        width: layout.width,
        height: layout.height
      }
    });
  }

 _setPushDataforGuest(){
   this.props.setGuestUser({pushToken:token,provider:'guest',deviceId:DeviceInfo.getUniqueID()}).then(()=>{
     AsyncSetting.setGuestFlag('true');
  //  AsyncSetting.setAuthenticationUserFlag('false');
    Actions.MainScreen()
   })
 }
  _renderContainer() {
    return (
      <View style={styles.IntroContainer}>
        <View style={styles.screenView} onLayout={this._onLayoutDidChange}>
          <Carousel style={this.state.size}>
            <View style={this.state.size}>
              <PageOne/>
            </View>
            <View style={this.state.size}>
              <PageTwo/>
            </View>
            <View style={this.state.size}>
              <PageThree/>
            </View>
            <View style={this.state.size}>
              <PageFour/>
            </View>
          </Carousel>
        </View>
        <View style={styles.buttonMainView}>
        {this._renderButtons()}
        </View>
      </View>
    );
  }

  _gotoHomeScreen(){
    Actions.MainScreen()
  }
_renderButtons(){
  return(
  <View style={styles.buttonRow}>
      <TouchableOpacity onPress={()=>{this._setPushDataforGuest()}} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>{Actions.Login()}}>
        <Text  style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
  </View>
);
}
  render() {
    return (
      <View style={styles.container}>
        <Statusbar/>
          {this._renderContainer()}
      </View>
    );
  }
}

const mapStateToProps=state=>{
  return{

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Intro);
