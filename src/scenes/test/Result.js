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
import {Rewarded_video} from '@app/keys'
import {
  AdMobRewarded
} from 'react-native-admob'
class Result extends Component{
  componentDidMount(){
    AdMobRewarded.setAdUnitID(Rewarded_video);
    AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());
  }
  _gotoEducationTab(){
      Actions.MainScreen({type:'reset',pageName:'test'});
  }
  render(){

  return(
    <View style={{backgroundColor:'white',flex:1}}>
      <Statusbar/>
    <MainTestHeader title="Result" rightIcon="true" onPress={()=>{this._gotoEducationTab()}}/>
      <ScrollView>


      <ProgressCircle
                 style={ { height: 150,marginTop:8} }
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
              <View key={index} style={[styles.ansKeyContainer,{marginLeft:8,marginRight:8}]}>
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
