import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './Test.styles'
import {images} from '../../theme'
import {Actions} from 'react-native-router-flux';
class Test extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{Actions.TestList()}} style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Test Series</Text>
          <Text style={styles.subText}>Contains questions set.</Text>
      </View>
    </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.PrevQuestionPaper()}} style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Previous Papers</Text>
          <Text style={styles.subText}>5+ years of previous papers</Text>
        </View>
      </TouchableOpacity>
      </View>
    )
  }
}

export default Test;
