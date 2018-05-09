import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import styles from './Test.styles'
import {colors} from '../../theme'
import {Actions} from 'react-native-router-flux';
import { ProgressCircle } from 'react-native-svg-charts'
import MainTestHeader from './MainTestHeader'
import Statusbar from '../../components/Statusbar'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';

class Result extends Component{
  render(){
  return(
    <View style={{backgroundColor:'white',flex:1}}>
      <Statusbar/>
    <MainTestHeader title="Result"/>
      <ScrollView>


      <ProgressCircle
                 style={ { height: 200} }
                 progress={ this.props.result/25 }
                 progressColor={colors.appColor}
                 startAngle={ -Math.PI * 1 }
                 endAngle={ Math.PI * 1 }
             >
      </ProgressCircle>

      <View style={styles.marksContainer}>
        <Text style={styles.marksText}>Out of 25 you got {this.props.result} marks</Text>
      </View>

        <View>

          <View style={[styles.ansKeyContainer,{marginTop:16}]}>
            <Text style={styles.marksText}>Answer Key</Text>
          </View>
          {this.props.practiceQuestion.map((data,index)=>{
            return(
              <View key={index} style={styles.ansKeyContainer}>
                <View style={styles.queNoContainer}>
                  <Text style={styles.ansText}>
                    {index+1}
                  </Text>
                </View>
                <View style={styles.ansContainer}>
                  <Text  style={styles.ansText}>
                    {data.ans}
                  </Text>
                </View>
              </View>

            )
          })}

        </View>
        </ScrollView>
    </View>

  )
}
}
const mapStateToProps=state=>{
  return{
   practiceQuestion:state.testReducers.practiceQuestion
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Result);
