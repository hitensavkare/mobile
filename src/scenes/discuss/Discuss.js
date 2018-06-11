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
      })
      const data={id:this.state._id,fromRange:0}
      this.props.getPostedQuestion(data).then(()=>{
          this.setState({dataSource:this.props.postedQuestionSource})
      })

}
_gotoQuestionScreen(){
  if(value===null){
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
_gotoCommentScreen=(id)=>{
  alert(id)
  Actions.Comments({questionPostId:id})
}

  render(){
    console.log('hey data',this.state.dataSource.length);
    return(
      this.state.dataSource.length===0?null:
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(<Question data={item} _gotoCommentScreen={this._gotoCommentScreen}/>)}
          keyExtractor={(item,index)=>index.toString()}
        />
        <View style={styles.float}>
          <TouchableOpacity style={styles.floatView} onPress={()=>{this._gotoQuestionScreen()}}>
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
