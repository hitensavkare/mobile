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
import Loader from '@components/Loader'
import {Actions} from 'react-native-router-flux';
class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,
      dataSource:[],
      _id:null,
      comment:'',
      loading:false,
    }
  //  alert(this.props.isAcceptFlag)
  }
  componentDidMount(){
      AsyncStorage.getItem('id').then((value)=>{
        this.setState({_id:value})
        const data={id:value,questionId:this.props.questionPostId}
        this.setState({loading:true})
        this.props.getComments(data).then(()=>{
            this.setState({dataSource:this.props.commentData,loading:false})
        })
            })

  }

  componentDidUpdate(){

  }

  _putComment(value){
    const data={id:this.state._id,comment:this.state.comment,questionId:value,qPosterId:this.props.questionariesId}
      this.setState({loading:true,comment:''})
    this.props.postComment(data).then(()=>{
        this.setState({dataSource:this.props.commentData,loading:false})
    })
  }
  getSilver(silver,commentorId,commentId){

  }
  getBronze(bronze,commentorId,commentId){

  }
  getSpam(spam,commentorId,commentId){

  }
  render(){
    const {data}=this.state.dataSource;
    return(
    <View style={styles.commentMainContainer}>
      <Statusbar/>
        <Header
        androidStatusBarColor={colors.appColor} style={styles.headerView}>
        <Loader
           loading={this.state.loading} />
       <View style={styles.headerSection}>
         <View style={styles.closeIconContainer}>
           <TouchableOpacity onPress={()=>{Actions.MainScreen({type:'reset',pageName:'discuss'})}}>
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
      <View style={this.state._id===null||this.state._id==='null'?styles.flatListView:styles.flatListViewShort}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(<Comment data={item}
                                  _id={this.state._id}
                                  _questionId={this.props.questionPostId}

                                  />)}
          keyExtractor={(item,index)=>index.toString()}
        />
      </View>
      {this.state._id===null||this.state._id==='null'?null:
      <View style={styles.commentBox}>
        <TextInput
          multiline={true}
          onChangeText={(comment)=>{this.setState({comment})}}
          placeholder='Share Knowledge'
          style={styles.commentText}
          maxLength={450}
          value={this.state.comment}
         />
         <TouchableOpacity
           onPress={()=>{this._putComment(this.props.questionPostId)}}
           style={styles.sendButton}>
           <Text>SHARE</Text>
         </TouchableOpacity>
      </View>

    }
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
