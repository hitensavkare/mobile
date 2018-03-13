import React, {Component} from 'react';
import {View, Platform, Image, Dimensions} from 'react-native';
import {Button, Text} from 'native-base';
import {images} from '../../theme'
import styles from './Intro.styles'
const deviceWidth = Dimensions
  .get('window')
  .width;
const deviceHeight = Dimensions
  .get('window')
  .height;
  class PageOne extends Component {
    render() {
      return (
        <View style={styles.containerIntro}>
          <View style={styles.introImageContainer}>
            <Image source={images.introJob} style={styles.introOne}/>
            <Text style={styles.introTextHeading}>Search Jobs</Text>
            <Text style={styles.introText}>
              Here you can find the best jobs suitable for you. just come and get your best.
            </Text>
          </View>
        </View>
      )
    }
  }

export default PageOne
