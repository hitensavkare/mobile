import React, { Component } from 'react';
import {colors} from '../../theme'
import {
  Platform,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  AsyncStorage
} from 'react-native'
import {Header} from 'native-base';
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import styles from './Discuss.styles'
import Comment from '@components/question/Comment'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';

class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,
      dataSource:[],
      _id:null,
      comment:''
    }
  }
  componentDidMount(){
      AsyncStorage.getItem('id').then((value)=>{
        this.setState({_id:value})
        })
        const data={id:this.state._id,questionId:this.props.questionPostId}
        this.props.getComments(data).then(()=>{
            this.setState({dataSource:this.props.commentData})
        })
  }

  componentDidUpdate(){
  }

  _putComment(value){
    const data={id:this.state._id,comment:this.state.comment,questionId:value}
    this.props.postComment(data).then(()=>{
        this.setState({dataSource:this.props.commentData})
    })
  }
  render(){
    const {data}=this.state.dataSource;
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
          keyExtractor={(item,index)=>index.toString()}
        />
      </View>
      <View style={styles.commentBox}>
        <TextInput
          multiline={true}
          onChangeText={(comment)=>{this.setState({comment})}}
          placeholder='Share Knowledge'
          style={styles.commentText}
          maxLength={450}
         />
         <TouchableOpacity
           onPress={()=>{this._putComment(this.props.questionPostId)}}
           style={styles.sendButton}>
           <Text>SHARE</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
  }
}
const mapStateToProps=state=>{
  return{
      commentData:state.discussReducer.commentData,

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Comments);
