import React, { Component } from 'react';
import {StatusBar,View,Platform} from 'react-native';
import {baseStyle as bs,colors,sizes} from '../theme'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 24 : StatusBar.currentHeight;
class Statusbar extends Component{
  render(){
    return(
      <View  style={{height:STATUSBAR_HEIGHT}}>
          <StatusBar
            backgroundColor={colors.cardBorder}
            translucent
          />
        </View>
    )
  }
}
export default Statusbar;
