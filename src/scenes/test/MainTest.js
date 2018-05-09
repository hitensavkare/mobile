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
let scoreCalculate=[];
class MainTest extends Component{
  constructor(props){
    super(props)
  this.state={
    index:0,
    dataSource:[],
    singleData:null,
    opt1:null,
    opt2:null,
    opt3:null,
    opt4:null,
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

    this.setState({
      opt1:false,
      opt2:false,
      opt3:false,
      opt4:false
    })
    let newIndex=1;
    if(this.state.index+1>=this.state.dataSource.length){
      let result=0
      for(let i=0;i<scoreCalculate.length;i++){
        result=result+scoreCalculate[i];
      }
      //alert(result)
      Actions.Result({result:result})
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
    this.setState({
      opt1:false,
      opt2:false,
      opt3:false,
      opt4:false
    })
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
checkAns(data,flag){
//  alert(flag)
console.log(data,this.state.singleData.ans);
  if(data===this.state.singleData.ans){
    scoreCalculate[this.state.index]=1
  }
  else {
    scoreCalculate[this.state.index]=-0.25
  }
if( flag==='opt1'){
  this.setState({
    opt1:true,
    opt2:false,
    opt3:false,
    opt4:false
  })
}
 else if(flag==='opt2'){
  this.setState({
    opt1:false,
    opt2:true,
    opt3:false,
    opt4:false
  })
}

else if(flag==='opt3'){
  this.setState({
    opt1:false,
    opt2:false,
    opt3:true,
    opt4:false
  })
}
else if(flag==='opt4'){
  this.setState({
    opt1:false,
    opt2:false,
    opt3:false,
    opt4:true
  })
}

console.log('hey your score is=',scoreCalculate)
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
      <MainTestHeader title="Examination"/>

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
          {this.state.opt1===true?
            <TouchableOpacity  style={styles.optionViewSelectedButton} onPress={()=>{this.checkAns(this.state.singleData.opt1,'opt1')}}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt1}
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity  style={styles.optionViewButton} onPress={()=>{this.checkAns(this.state.singleData.opt1,'opt1')}}>
              <Text style={styles.selectedText}>
              {this.state.singleData.opt1}
              </Text>
            </TouchableOpacity>
          }
          {this.state.opt2===true?
            <TouchableOpacity  style={styles.optionViewSelectedButton} onPress={()=>{this.checkAns(this.state.singleData.opt2,'opt2')}}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt2}
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity  style={styles.optionViewButton} onPress={()=>{this.checkAns(this.state.singleData.opt2,'opt2')}}>
              <Text style={styles.selectedText}>
              {this.state.singleData.opt2}
              </Text>
            </TouchableOpacity>
          }

          {this.state.opt3===true?
            <TouchableOpacity  style={styles.optionViewSelectedButton} onPress={()=>{this.checkAns(this.state.singleData.opt3,'opt3')}}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt3}
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity  style={styles.optionViewButton} onPress={()=>{this.checkAns(this.state.singleData.opt3,'opt3')}}>
              <Text style={styles.selectedText}>
              {this.state.singleData.opt3}
              </Text>
            </TouchableOpacity>
          }

          {this.state.opt4===true?
            <TouchableOpacity  style={styles.optionViewSelectedButton} onPress={()=>{this.checkAns(this.state.singleData.opt4,'opt4')}}>
              <Text style={styles.radioLabelStyle}>
              {this.state.singleData.opt4}
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity  style={styles.optionViewButton} onPress={()=>{this.checkAns(this.state.singleData.opt4,'opt4')}}>
              <Text style={styles.selectedText}>
              {this.state.singleData.opt4}
              </Text>
            </TouchableOpacity>
          }
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
