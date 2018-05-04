import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
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
    dataSource:[{id:1},{id:2},{id:3},{id:4},{id:5}]
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
        <View style={styles.float}>
          <TouchableOpacity style={styles.floatView} onPress={()=>{this._gotoQuestionScreen()}}>
            <Text style={styles.subHeadingText}>NEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Discuss;
