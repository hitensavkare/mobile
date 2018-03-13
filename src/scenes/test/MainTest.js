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
import {Drawer} from 'native-base'
import {Actions} from 'react-native-router-flux';
import ExamQuestions from '../../components/ExamQuestions'
import MainTestHeader from './MainTestHeader'
import Statusbar from '../../components/Statusbar'
import styles from './Test.styles'
import ExamSectionDrawer from '../../components/ExamSectionDrawer'
class MainTest extends Component{
  openDrawer(){
    this.drawer._root.open()
    //alert('hello')
  }

  closeDrawer(){
    this.drawer._root.close()
  }

  render(){
    return(
      <Drawer
        drawerPosition= 'right'

panOpenMask={0.80}
captureGestures="open"
        ref={(ref) => { this.drawer = ref; }}

        onClose={() => this.closeDrawer()}
        content={<ExamSectionDrawer navigator={this.navigator} />}
        >
      <View style={styles.containerTestSeries}>
        <Statusbar/>
      <MainTestHeader onPress={()=>{this.openDrawer()}}/>
      <ExamQuestions/>
      </View>
    </Drawer>
    )
  }
}
export default MainTest;
