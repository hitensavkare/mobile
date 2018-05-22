import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HeaderTest from './HeaderTest'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import styles from './Test.styles'
class Instruction extends Component{
  render(){
    return(
      <View style={styles.containerTestSeries}>
        <Statusbar/>
        <HeaderTest pageName='Instruction'/>
        <View style={styles.subContainer}>
          <ScrollView>
        <Text style={styles.InstructionText}>
          - Once you start the test, you cannot stop the test or cannot move to previouse Screen.
        </Text>
        <Text style={styles.InstructionText}>
          - For correct answer you will get 1 mark and for wrong attempt you will get -0.25
        </Text>
        <Text style={styles.InstructionText}>
          - After last question your test will be submitted automatically, you can also submit test by pressing submit button.
        </Text>
        <Text style={styles.InstructionText}>
          - Right now there is no timer for test, so there is not limitation of time for you.
        </Text>
        <Text style={styles.InstructionText}>
          - Test consist 10 aptitute,10 Logical Reasioning and 5 English questions.
        </Text>
        <TouchableOpacity style={styles.submitContainer} onPress={()=>{Actions.MainTest({type:'reset',_id:this.props._id})}}>
          <Text style={styles.submitText}>Start</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>

      </View>
    )
  }
}
export default Instruction;
