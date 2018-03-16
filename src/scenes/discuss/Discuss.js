import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {images} from '../../theme'
import styles from './Discuss.styles'
import Question from '@components/question'
class Discuss extends Component{
constructor(props){
  super(props);
  this.state={
    dataSource:[],
  }
}
componentDidMount(){
  this.setState({
    dataSource:[{id:1},{id:2}]
  })
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
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(<Question data={item}/>)}
          keyExtractor={(item,index)=>index}
        />
      </View>
    )
  }
}

export default Discuss;
