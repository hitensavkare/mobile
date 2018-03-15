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
import {Actions} from 'react-native-router-flux';
import styles from './ExamQuestions.styles'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from '../lib/RadioButton';
import {colors} from '../theme'
class ExamQuestions extends Component{
  constructor(props) {
    super(props)
    this.state = {
      radioTypes: [
        {
          label: 'he Kakori Conspircy case (1925)',
          value: 'English'
        }, {
          label: '1857 Revolt',
          value: 'German'
        }, {
          label: 'Chauri Chaura Case',
          value: 'Serbian'
        }, {
          label: 'The Jallianwala Bagh massacre',
          value: 'Spanish'
        }
      ],
      radioValue: 0,
      radioValueSelectedIndex: 0,
      language:this.props.language,
    }
  }
  _onSelect(value, index) {
   this.setState({language: value.value, radioValueSelectedIndex: index});
 }
 _setLanguage(){
  this.props.postSettingLanguage(this.props.token,{settingLanguage:this.state.language}).then(()=>{
    Actions.pop()
  })
 }
 _renderOption(collection){
   return(
     <RadioForm formHorizontal={false} animation={true}>
       {collection
         .map((obj, i) => {
           return (
             <View style={styles.radioFormView} key={i}>
               <View>
                 <RadioButton>
                   <RadioButtonInput
                      obj={obj}
                      index={obj.value}
                      isSelected={this.state.language ===obj.value}
                      onPress={() => this._onSelect(obj, i)}
                      buttonInnerColor={colors.appColor}
                      buttonOuterColor={this.state.language ===obj.value
                      ? colors.appColor
                      : colors.cardBorder}
                      buttonSize={10}/>
                 </RadioButton>
               </View>
               <View style={styles.radioLabelView}>
                 <Text style={styles.radioLabelStyle}>{obj.label}</Text>
               </View>
             </View>
           )
         })
       }
     </RadioForm>
   )
 }

  render(){
    return(
        <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>

  The revolutionary like Ashfaqullah Khan, Chandra Shekhar Azad, Ram Prasad Bismil, Roshan Singh and Rajendra Lahiri were all associated with :
    The revolutionary like Ashfaqullah Khan, Chandra Shekhar Azad, Ram Prasad Bismil, Roshan Singh and Rajendra Lahiri were all associated with :
    
            </Text>
          </View>
          {this._renderOption(this.state.radioTypes)}
        </View>
      </View>
    </ScrollView>
    )
  }
}

export default ExamQuestions;
