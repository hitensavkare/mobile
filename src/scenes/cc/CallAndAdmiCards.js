import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import styles from '@components/screenStyles/CallAndAdmiCards.styles'
import {images} from '../../theme'
//import NotifyRecord from '.../../../components/tupples/NotifyRecord'
import NotifyRecord from '@components/notifyRecord'
class CallAndAdmiCards extends Component{
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
  render(){
    return(
      <View style={styles.container}>
        <FlatList
            data={this.state.dataSource}
          renderItem={({item})=>(<NotifyRecord data={item}/>)}
          keyExtractor={(item,index)=>index}
        />
      </View>
    )
  }
}

export default CallAndAdmiCards;
