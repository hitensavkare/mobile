import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabNavigator} from 'react-navigation'
import Test from './test/Test'
import Discuss from './discuss/Discuss'
import Tabs from 'react-native-tabs';
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'home'
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1,

  },

  tabContainer:{
    borderTopWidth:0.4,
    borderTopColor:'#b0bec5',
    height:56,
    backgroundColor:theme.white,

  },
  tabImage:{
    height:36,
    width:36,
  },
  viewFooter:{

  }
export default Home;
