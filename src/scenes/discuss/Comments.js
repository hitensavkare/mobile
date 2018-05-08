import React, { Component } from 'react';
import {colors} from '../../theme'
import {
  Platform,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from 'react-native'
import {Header} from 'native-base';
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import styles from './Discuss.styles'
import Comment from '@components/question/Comment'
class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,
      dataSource:[],
    }
  }
  componentDidMount(){
    this.setState({
      dataSource:[{id:1,isAccepted:false},{id:2,isAccepted:true},{id:3,isAccepted:false},{id:4,isAccepted:false}]
    })
  }
  componentDidUpdate(){
  }
  _putComment(){
    let arrayData=this.state.dataSource;
    arrayData.push({id:5});
    this.setState({
      dataSource:arrayData
    })
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
          Comments
           </Text>
         </View>
       </View>
     </Header>
      <View style={{flex: 3.5,marginBottom:60}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(<Comment data={item}/>)}
          keyExtractor={(item,index)=>index}
        />
      </View>
      <View style={styles.commentBox}>
        <TextInput
          multiline={true}
          placeholder='Share Knowledge'
          style={styles.commentText}
         />
         <TouchableOpacity
           onPress={()=>{this._putComment()}}
           style={styles.sendButton}>
           <Text>SHARE</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
  }
}
export default Comments;
