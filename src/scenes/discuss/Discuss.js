import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  AsyncStorage
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {images} from '../../theme'
import styles from './Discuss.styles'
import Question from '@components/question'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class Discuss extends Component{
constructor(props){
  super(props);
  this.state={
    dataSource:[],
    _id:null,
    loading:false,
  }
}
componentDidMount(){
    AsyncStorage.getItem('id').then((value)=>{
      this.setState({_id:value})
      const data={id:value,fromRange:0}
      this.setState({loading:true})
      this.props.getPostedQuestion(data).then(()=>{
          this.setState({dataSource:this.props.postedQuestionSource,loading:false})
      })
      })


}
_gotoQuestionScreen(value){
  if(value===null || value==='null'){
    Actions.Login()
  }
  else{
      Actions.Question({userId:this.state._id});
  }
}
_changeCommentSectionState(visible){
  this.setState({
    isCommentVisible:visible,
  })
}
_gotoCommentScreen=(id,isAccept,questionariesId)=>{
  Actions.Comments({questionPostId:id,isAcceptFlag:isAccept,questionariesId:questionariesId})
}

  render(){
    console.log('hey data',this.state.dataSource.length);
    return(

      <View style={[styles.container]}>
        <Loader
           loading={this.state.loading} />
           <View style={{paddingBottom:5}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(<Question data={item} _gotoCommentScreen={this._gotoCommentScreen}/>)}
          keyExtractor={(item,index)=>index.toString()}
        />
        </View>
        <View style={styles.float}>
          <TouchableOpacity style={styles.floatView} onPress={()=>{this._gotoQuestionScreen(this.state._id)}}>
            <Text style={styles.subHeadingText}>NEW</Text>
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
const mapStateToProps=state=>{
  return{
      postedQuestionSource:state.discussReducer.postedQuestionDataSource,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Discuss);
