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
  ScrollView,
} from 'react-native'
import {Header} from 'native-base';
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import styles from './Discuss.styles'
import {Actions} from 'react-native-router-flux';
import {CardItem} from 'native-base';
class Comment extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,
    }
  }

  _renderCommentSection(){
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
          <View>
            <Text style={styles.viewMoretext}>
              View More...
            </Text>
          </View>



      </View>
    )
  }
  render(){
    return(
    <View style={styles.commentMainContainer}>
      <Statusbar/>
        <Header
        androidStatusBarColor={colors.appColor} style={styles.headerView}>
       <View style={styles.headerSection}>
         <View style={styles.closeIconContainer}>
           <TouchableOpacity onPress={()=>{this._gotoPreviouseScreen()}}>
           <Image source={images.iconBack} style={{height:24,width:24}}/>
           </TouchableOpacity>
         </View>
         <View style={styles.headerTextContainer}>
           <Text style={styles.headerText}>
            Questions
           </Text>
         </View>
       </View>
     </Header>
      <View style={{flex: 3.5}}>
        <ScrollView>
        {this._renderCommentSection()}
      </ScrollView>
      </View>
      <View style={styles.commentBox}>
        <View style={{flex:3}}>
          <TextInput
            multiline={true}
            style={styles.commentTextInput}/>
        </View>
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>
          SEND
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  )
  }
}
export default Comment;
