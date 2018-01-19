import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabNavigator} from 'react-navigation'
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
        <Text style={styles.text}>This is Home page where we Decribe All the new Vancancies </Text>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  text:{
  fontSize:16,
  padding: 16
}
});
export default Home;
