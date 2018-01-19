import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class CallAndAdmiCards extends Component{
  render(){
    return(
      <View>
        <Text style={styles.text}>Call Latters and Admit Cards </Text>
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
export default CallAndAdmiCards;
