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
  console.log('hey props',this.props.data);
  }

_gotoComment(id,isAccepted,questioneriesId){
  this.props._gotoCommentScreen(id,isAccepted,questioneriesId)
}
  render(){
    const data=this.props.data
    return(
        <View style={styles.mainQuestionContainer} key={data._id}>
          <View style={{flexDirection: 'row'}}>
            <View  style={{flex:3.5}}>
          <View style={styles.QuestionContainer}>
            <View style={styles.questionView}>
            <Text style={styles.text}>{data.questionDef}-
              <Text style={styles.personNameText}>Asked by:{data.userName}</Text>
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={styles.viewMoretext}>{data.tagName} </Text>
            <Text style={styles.dateText}>Posted on:{data.created}</Text>
          </View>
          </View>

          </View>
          <View style={styles.commentOptionContainer}>
            <View style={{marginRight:16}}>
              <Text style={styles.viewMoretext}>{data.points} Points</Text>
            </View>
            <TouchableOpacity style={{marginRight:16}} onPress={()=>this._gotoComment(data._id,data.isAccepted,data.questioneriesId)}>
              <Image source={images.iconComment} style={{height:25,width:25}}/>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{flex:0.5,justifyContent:'center',alignItems: 'flex-start'}}>
          {data.isAccepted==='true'?
          <TouchableOpacity style={styles.rewardTouch}>
            <Image source={images.iconTick} style={styles.rewardIcon}/>
          </TouchableOpacity>:
          null}

        </View>
          </View>
        </View>
    )
  }
}

export default Question;
