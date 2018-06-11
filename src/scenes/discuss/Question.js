import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  TextInput,
} from 'react-native';
import HeaderDiscuss from './HeaderDiscuss'
import styles from './Question.style'
import {colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
import {Actions} from 'react-native-router-flux';
class Question extends Component{
  constructor(props){
    super(props);
    this.state={
      question_category:'NA',
      points:'',
      question:'',
      flag:null,
    }
  }
  componentWillMount(){

  }
  _postQuestion=()=>{
    if(this.state.question_category==='NA' || this.state.points==='' || this.state.question===''){
      alert('Please fill all the fields first.')
    }
    else{
      const data={val:this.state.points,catId:this.state.question_category,question:this.state.question,userid:this.props.userId}
      this.props.postQuestion(data)
    }
}
  render(){
  return(
    <View style={styles.container}>
      <Statusbar/>
      <HeaderDiscuss pageName="Ask Question" rightButton='POST' postAction={this._postQuestion}/>
      <View style={styles.subContainer}>

        <Picker
          selectedValue={this.state.question_category}
          onValueChange={(itemValue, itemIndex) => this.setState({question_category: itemValue})}>
          <Picker.Item label="Choose Question Category" value="NA" />
          <Picker.Item label="Sci & Tech" value="1" />
          <Picker.Item label="History" value="2" />
          <Picker.Item label="Geography" value="3" />
          <Picker.Item label="Polity" value="4" />
          <Picker.Item label="National" value="5" />
          <Picker.Item label="International" value="6" />
          <Picker.Item label="GK" value="7" />
            <Picker.Item label="Other" value="8r" />
        </Picker>

        <View>
          <TextInput
            onChangeText={(question)=>{this.setState({question})}}
            multiline={true}
            placeholder="Your Question"
            underlineColorAndroid={colors.appColor}
            maxLength = {450}
             style={styles.QuestionFont}
          />
          <TextInput
            onChangeText={(points)=>{this.setState({points})}}
            keyboardType='numeric'
            placeholder="Points for this questions?"
            underlineColorAndroid={colors.appColor}
            maxLength = {450}
            multiline = {true}
             style={styles.QuestionFont}
             maxLength={10}
          />
        </View>
      </View>
    </View>
  )
}
}
const mapStateToProps=state=>{
  return{
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Question);
