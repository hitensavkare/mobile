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
import styles from './Discuss.styles'

class Discuss extends Component{
constructor(props){
  super(props);
  this.state={
    isCommentVisible:false,
  }
}
_gotoQuestionScreen(){
  Actions.Question();
}
_changeCommentSectionState(visible){
  this.setState({
    isCommentVisible:visible,
  })
}
_gotoCommentScreen(){
  Actions.Comment()
}


  render(){
    return(
      <View style={styles.container}>


        <ScrollView>
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
          <View style={styles.imageBookmarke}>
            <Image source={images.bookmarmActive} style={{height:30,width:30}}/>
          </View>
          </View>
          <View style={styles.commentOptionContainer}>
            <TouchableOpacity style={{marginRight:16}}>
              <Image source={images.likesActive} style={{height:30,width:30}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:16}} onPress={()=>{this._gotoCommentScreen()}}>
              <Image source={images.bookmarmActive} style={{height:30,width:30}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:16}}>
              <Image source={images.bookmarmActive} style={{height:30,width:30}}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainQuestionContainer}>
          <View style={styles.QuestionContainer}>
            <View style={styles.questionView}>
            <Text style={styles.text}>Explain the cast system during Akbar king?-
              <Text style={styles.personNameText}>Asked by:Hitendra Savkare</Text>
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.viewMoretext}>History </Text>
            <Text style={styles.dateText}>Posted on:22/03/2017</Text>
          </View>
          </View>
          <View style={styles.imageBookmarke}>
            <Image source={images.bookmarmActive} style={{height:30,width:30}}/>
          </View>
          </View>
          <View style={styles.commentOptionContainer}>
            <TouchableOpacity style={{marginRight:16}}>
              <Image source={images.likesActive} style={{height:30,width:30}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:16}}>
              <Image source={images.bookmarmActive} style={{height:30,width:30}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:16}}>
              <Image source={images.bookmarmActive} style={{height:30,width:30}}/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
        <View style={styles.float}>
          <TouchableOpacity style={styles.floatView} onPress={()=>{this._gotoQuestionScreen()}}>
            <Text style={styles.subHeadingText}>ASK</Text>
            <Text style={styles.subHeadingText}>QUESTION</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default Discuss;
