import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HeaderTest from './HeaderTest'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import styles from './Test.styles'
class TestList extends Component{
  render(){
    return(
      <View style={styles.containerTestSeries}>
        <Statusbar/>
        <HeaderTest pageName='Test Series'/>
        <TouchableOpacity onPress={()=>{Actions.MainTest()}} style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Question Set 1</Text>
          <Text style={styles.subText}>Published on 23/03/2017</Text>
      </View>
      </TouchableOpacity>
      </View>
    )
  }
}
export default TestList;
