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

class ContactUs extends Component{
render(){
  return(
    <View style={styles.searchContainer}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Contact Us"/>
    </View>
    )
  }
}
export default ContactUs;
