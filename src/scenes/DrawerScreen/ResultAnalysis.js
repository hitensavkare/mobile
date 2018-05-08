import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './DrawerScreen.styles'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderDrawer from './HeaderDrawer'

class ResultAnalysis extends Component{
render(){
  return(
    <View style={styles.searchContainer}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Result Analysis"/>
    </View>
    )
  }
}
export default ResultAnalysis;
