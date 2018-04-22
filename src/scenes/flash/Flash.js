import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import styles from './Flash.styles'
const splashImg=require('../../assets/images/splash.gif')
import Statusbar from '../../components/Statusbar'
class Flash extends Component{
  render(){
    return(
     <View style={styles.container}>
         <Statusbar/>
        <Image source={splashImg} style={styles.img}/>
      </View>
    )
  }
}

export default Flash;
