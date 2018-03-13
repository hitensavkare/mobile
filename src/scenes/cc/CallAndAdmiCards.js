import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './CallAndAdmiCards.styles'
import {images} from '../../theme'
class CallAndAdmiCards extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconNotification} style={{height:24,width:24}}/>
          </View>
          <View style={styles.TextColumnContainer}>
            <Text style={styles.subText}>SPI PO admit Card released.SPI PO admit Card released.SPI PO admit Card released. </Text>
          <Text style={styles.dateText}>posted on:22/03/2018</Text>
          </View>
      </View>

      <View style={styles.rowContainer}>
        <View style={styles.imageColumnContainer}>
          <Image source={images.iconNotification} style={{height:24,width:24}}/>
        </View>
        <View style={styles.TextColumnContainer}>
          <Text style={styles.subText}>SSC Result Declared, please Download it from www.maharesult.nic </Text>
        <Text style={styles.dateText}>posted on:22/03/2018</Text>
        </View>
    </View>
      </View>
    )
  }
}

export default CallAndAdmiCards;
