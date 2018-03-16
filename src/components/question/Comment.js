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
import Statusbar from '../../components/Statusbar'
import styles from '../screenStyles/Question.style'
import {Actions} from 'react-native-router-flux';
import {CardItem} from 'native-base';
class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,
    }
  }

  render(){
    return(
      <View style={styles.commentContainer}>
        <View style={styles.commentCard}>
            <View style={styles.commentSection}>
              <View style={styles.commentImgContainer}>
                <Image source={images.bookmarmActive} style={styles.commentProfileImg}/>
              </View>
              <View style={styles.commentText}>
                <Text style={styles.profileText}>
                  Hitendra Savkare
                </Text>
                <Text style={styles.comment}>
                  During Aurangzeb's reign, the empire gained political strength once more. Aurangzeb expanded the empire to include almost the whole of South Asia, but at his death in 1707, many parts of the empire were in open revolt.
                </Text>
              </View>
            </View>
            <View style={styles.bedgeContainer}>
              <Text>Gold Bedge</Text>
              <Text>Silver Bedge</Text>
              <Text>Bronze Bedge</Text>
              <Text>Dislike</Text>
            </View>
          </View>
        </View>

    )
  }
}
export default Comments;