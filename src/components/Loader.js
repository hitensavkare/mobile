import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './DrawerView.styles'

const Loader=(()=>{
  return(
  <View style={{justifyContent:'center',alignItems:'center',flex: 1}}>
  <ActivityIndicator size="large" color="#2196F3" /></View>
)
})

export default Loader;
