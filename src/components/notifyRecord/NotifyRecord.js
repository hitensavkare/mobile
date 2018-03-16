import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import styles from '../screenStyles/CallAndAdmiCards.styles'
import {images} from '../../theme'
class NotifyRecord extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconNotification} style={{height:24,width:24}}/>
          </View>
          <View style={styles.TextColumnContainer}>
            <Text style={styles.subText}>SPI PO admit Card released.SPI PO admit Card released.SPI PO admit Card released. </Text>
          <Text style={styles.dateText}>posted on:22/03/2018</Text>
          </View>
        </View>
    )
  }
}

export default NotifyRecord;
