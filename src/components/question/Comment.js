import React, { Component } from 'react';
import {colors} from '../../theme'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import {Header} from 'native-base';
import {images} from '../../theme'
import styles from '../screenStyles/Question.style'
import {Actions} from 'react-native-router-flux';
class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,

    }
  }

  render(){
    let data=this.props.data;
    return(
      <View style={styles.commentContainer}>
        <View style={styles.commentCard}>
            <View style={styles.commentSection}>
              <View style={styles.commentImgContainer}>
                {data.url==="" || data.url===null?
                <Image source={images.profileImage} style={styles.commentProfileImg}/>
                :<Image source={{uri:data.url}} style={styles.commentProfileImg}/>
              }
              </View>
              <View style={styles.commentText}>
                <Text style={styles.profileText}>
                  {data.name}
                </Text>
                <Text style={styles.comment}>
                  {data.comment}
                </Text>
              </View>
            </View>
            <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginRight:8}}>
              <Text style={styles.dateText}>Teached on:{data.postedOn}</Text>
            </View>
            <View style={styles.bedgeContainer}>
              <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                {this.props.data.isAccepted===true?
                  <TouchableOpacity style={styles.rewardTouch}>
                    <Image source={images.iconTick} style={styles.rewardIcon}/>
                    <Text>Accepted</Text>
                </TouchableOpacity>
                :null
                }

              </View>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity  style={styles.rewardTouch}><Image source={images.iconSilver} style={styles.rewardIcon}/>
                <Text>{data.silverCount}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rewardTouch}><Image source={images.iconBronz} style={styles.rewardIcon}/>
              <Text>{data.bronzeCount}</Text></TouchableOpacity>
              <TouchableOpacity style={styles.rewardTouch}><Image source={images.iconSpam} style={styles.rewardIcon}/>
              <Text>{data.spamCount}</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

    )
  }
}
export default Comments;
