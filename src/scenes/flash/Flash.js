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
class Flash extends Component{
  render(){
    return(
     <View style={styles.container}>
        <Image source={splashImg} style={styles.img}/>
      </View>
    )
  }
}

export default Flash
