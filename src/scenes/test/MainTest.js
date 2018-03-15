import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {Drawer,Button} from 'native-base'
import {Actions} from 'react-native-router-flux';
import ExamQuestions from '../../components/ExamQuestions'
import MainTestHeader from './MainTestHeader'
import Statusbar from '../../components/Statusbar'
import styles from './MainTest.styles'
import {images} from '../../theme';
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

      <View style={styles.timeContainer}>
          <Image source={images.iconTime} style={{height: 60,width: 60}}/>
          <Text style={styles.watchText}>
            11:20:50
        </Text>
      </View>
      <View style={styles.questionSetContainer}>
        <ExamQuestions/>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.prevButton}>
          <Image source={images.iconTestBack} style={styles.iconPrevNext} />
        </Button>
        <View style={styles.submitContainer}><Text style={styles.submitText}>SUBMIT</Text></View>
        <Button style={styles.nextButton}>
          <Image source={images.iconTestNext} style={styles.iconPrevNext} />
        </Button>

      </View>
      </View>
    </Drawer>
    )
  }
}
export default MainTest;
