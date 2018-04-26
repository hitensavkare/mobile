import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './DrawerScreen.styles'
import {images,colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderDrawer from './HeaderDrawer'

class Feedback extends Component{
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
            placeholder="Write your Feedback Here"
            underlineColorAndroid={colors.appColor}
            maxLength = {180}
             multiline = {true}
            style={styles.textinput}/>
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>
                SUBMIT
              </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
  }
}
export default Feedback;
