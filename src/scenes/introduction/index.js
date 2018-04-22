import React, {Component} from 'react';
import {View, Platform, Dimensions, TouchableOpacity,StatusBar} from 'react-native';
import {colors} from '../../theme'
import {Button, Text} from 'native-base';
import Carousel from '../../lib/Carousel';
import {Actions} from 'react-native-router-flux';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import styles from './Intro.styles'
const {width, height} = Dimensions.get('window');
import Statusbar from '../../components/Statusbar'
class Intro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: {
        width,
        height
      }
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({
      size: {
        width: layout.width,
        height: layout.height
      }
    });
  }

  _renderContainer() {
    return (
      <View style={styles.IntroContainer}>
        <View style={styles.screenView} onLayout={this._onLayoutDidChange}>
          <Carousel style={this.state.size}>
            <View style={this.state.size}>
              <PageOne/>
            </View>
            <View style={this.state.size}>
              <PageTwo/>
            </View>
            <View style={this.state.size}>
              <PageThree/>
            </View>
            <View style={this.state.size}>
              <PageFour/>
            </View>
          </Carousel>
        </View>
        <View style={styles.buttonMainView}>
        {this._renderButtons()}
        </View>
      </View>
    );
  }

  _gotoHomeScreen(){
    Actions.MainScreen()
  }
_renderButtons(){
  return(
  <View style={styles.buttonRow}>
      <TouchableOpacity onPress={()=>{this._gotoHomeScreen()}} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>{Actions.Login()}}>
        <Text  style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
  </View>
);
}
  render() {
    return (
      <View style={styles.container}>
        <Statusbar/>
          {this._renderContainer()}
      </View>
    );
  }
}


export default Intro;
