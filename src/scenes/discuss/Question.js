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
import {colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
class Question extends Component{
  constructor(props){
    super(props);
    this.state={
      question_category:'',
    }
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

        <View>
          <TextInput
            multiline={true}
            placeholder="Your Question"
            underlineColorAndroid={colors.appColor}
            maxLength = {450}
            multiline = {true}
             style={styles.QuestionFont}
          />
        </View>
      </View>
    </View>
  )
}
}
export default Question;
