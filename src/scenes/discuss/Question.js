import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  TextInput
} from 'react-native';
import HeaderDiscuss from './HeaderDiscuss'
import styles from './Question.style'
import Statusbar from '../../components/Statusbar'
class Question extends Component{
  constructor(props){
    super(props);
    this.state={
      question_category:'',
      question_type:'Descriptive',
    }
  }
  _renderMultipleChoice(){
    return(
      <View style={styles.optionContainer}>
        <TextInput
          multiline={true}
          placeholder="Option 1"
           style={styles.optionText}
        />
        <TextInput
          multiline={true}
          placeholder="Option 2"
           style={styles.optionText}
        />
        <TextInput
          multiline={true}
          placeholder="Option 3"
           style={styles.optionText}
        />
        <TextInput
          multiline={true}
          placeholder="Option 4"
           style={styles.optionText}
        />

      </View>
    )
  }
  render(){
  return(
    <View style={styles.container}>
      <Statusbar/>
      <HeaderDiscuss pageName="Ask Question" rightButton='POST'/>
      <View style={styles.subContainer}>

        <Picker
          selectedValue={this.state.question_category}
          onValueChange={(itemValue, itemIndex) => this.setState({question_category: itemValue})}>
          <Picker.Item label="Choose Question Category" value="NA" />
          <Picker.Item label="Sci & Tech" value="Sci & Tech" />
          <Picker.Item label="History" value="History" />
          <Picker.Item label="Geography" value="Geography" />
          <Picker.Item label="Polity" value="Polity" />
          <Picker.Item label="National" value="National" />
          <Picker.Item label="International" value="International" />
          <Picker.Item label="GK" value="GK" />
            <Picker.Item label="Other" value="Other" />
        </Picker>

        <Picker
          selectedValue={this.state.question_type}
          onValueChange={(itemValue, itemIndex) => this.setState({question_type: itemValue})}>
          <Picker.Item label="Choose Question Type" value="NA" />
          <Picker.Item label="Descriptive" value="Descriptive" />
          <Picker.Item label="Multiple Choice" value="Multiple Choice" />
        </Picker>

        <View>
          <TextInput
            multiline={true}
            placeholder="Your Question"
             style={styles.QuestionFont}
          />
        </View>

          {this.state.question_type==='Descriptive'?null:this._renderMultipleChoice()}

      </View>
    </View>
  )
}
}
export default Question;
