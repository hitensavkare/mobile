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
import {images,colors} from '../../theme';
import ExamSectionDrawer from '../../components/ExamSectionDrawer'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from '../../lib/RadioButton';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';

class MainTest extends Component{
  constructor(props){
    super(props)
  this.state={
    index:0,
    dataSource:[],
    singleData:null
    }
  }
  openDrawer(){
    this.drawer._root.open()
    //alert('hello')
  }

  componentDidMount(){
    this.props.getPracticeExam({setId:this.props._id}).then(()=>{
      this.setState({
        dataSource:this.props.practiceQuestion,
        singleData:this.props.practiceQuestion[this.state.index]
      })
    })
  }
  closeDrawer(){
    this.drawer._root.close()
  }

  _incrementIndex(){
    let newIndex=1;
    if(this.state.index+1>=this.state.dataSource.length){
      alert('done')
    }
    else{
      newIndex=this.state.index+1;
      //alert(this.state.dataSource[newIndex+1])
      this.setState({
        index:newIndex,
        singleData:this.state.dataSource[newIndex]
      })
    }
  }
  _decrementIndex(){
    let newIndex=1;
    if(this.state.index<=0){
      alert('last Question')
    }
    else{
      newIndex=this.state.index-1;
      //alert(this.state.dataSource[newIndex+1])
      this.setState({
        index:newIndex,
        singleData:this.state.dataSource[newIndex]
      })
    }
  }

  render(){
    return(
    /*  <Drawer

        drawerPosition= 'right'
        panOpenMask={0.80}
        captureGestures="open"
        ref={(ref) => { this.drawer = ref; }}
        onClose={() => this.closeDrawer()}
        content={<ExamSectionDrawer navigator={this.navigator} />}
        >*/
      <View style={styles.containerTestSeries}>
        <Statusbar/>
      <MainTestHeader/>

      <View style={styles.timeContainer}>
          <Image source={images.iconTime} style={{height: 60,width: 60}}/>
          <Text style={styles.watchText}>
            11:20:50
        </Text>
      </View>
      <View style={styles.questionSetContainer}>
        <ScrollView style={{backgroundColor:'white',flex:1}}>
          {this.state.singleData!==null?
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>

              {this.state.singleData.qTitle}
            </Text>
          </View>
          <View style={styles.optionView}>
            <TouchableOpacity  style={styles.optionViewButton}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt1}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionViewButton}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt2}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionViewButton}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt3}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionViewButton}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt4}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      :null}
    </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={()=>{this._decrementIndex()}} style={styles.prevButton} >
          <Image source={images.iconTestBack} style={styles.iconPrevNext} />
        </Button>
        <View style={styles.submitContainer}><Text style={styles.submitText}>SUBMIT</Text></View>
        <Button style={styles.nextButton} onPress={()=>{this._incrementIndex()}}>
          <Image source={images.iconTestNext} style={styles.iconPrevNext} />
        </Button>

      </View>
      </View>
  //  </Drawer>
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
export default connect(mapStateToProps,mapDispatchToProps)(MainTest);
