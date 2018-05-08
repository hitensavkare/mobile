import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {images} from '../../theme'
import styles from '../screenStyles/Question.style'

class Question extends Component{
constructor(props){
  super(props);
  }
  _gotoCommentScreen(){
    Actions.Comments()
  }
  render(){
    return(
        <View style={styles.mainQuestionContainer}>
          <View style={styles.QuestionContainer}>
            <View style={styles.questionView}>
            <Text style={styles.text}>Explain the cast system during Akbar king?-
              <Text style={styles.personNameText}>Asked by:Hitendra Savkare</Text>
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.viewMoretext}>Sci & Tech </Text>
            <Text style={styles.dateText}>Posted on:22/03/2017</Text>
          </View>
          </View>

          </View>
          <View style={styles.commentOptionContainer}>
            <TouchableOpacity style={{marginRight:16}}>
              <Image source={images.likesActive} style={{height:25,width:25}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:16}} onPress={()=>{this._gotoCommentScreen()}}>
              <Image source={images.iconComment} style={{height:25,width:25}}/>
            </TouchableOpacity>

          </View>
        </View>
    )
  }
}

export default Question;
