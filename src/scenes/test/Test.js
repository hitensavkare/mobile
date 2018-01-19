import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Test extends Component{
  render(){
    return(
      <View>
        <Text style={styles.text}>This is Examination Page for the User</Text>
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
export default Test;
