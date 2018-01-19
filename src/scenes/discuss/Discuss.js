import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Discuss extends Component{
  render(){
    return(
      <View>
        <Text style={styles.text}>All User GK discussion will be done here </Text>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
  fontSize:16,

  padding: 16
  //  backgroundColor:theme.white,

  },
  tabImage:{
    height:36,
    width:36,
  },
  viewFooter:{

  }
});
export default Discuss;
