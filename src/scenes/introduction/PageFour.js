import React, {Component} from 'react';
import {View, Platform, Image, Dimensions} from 'react-native';
import {Button, Text} from 'native-base';
import {images} from '../../theme'
import styles from './Intro.styles'

class PageFour extends Component {
    render() {
      return (
        <View style={styles.containerIntro}>
          <View style={styles.introImageContainer}>
            <Image source={images.introDiscuss} style={styles.introOne}/>
            <Text style={styles.introTextHeading}>GK Discussion</Text>
            <Text style={styles.introText}>
              Here you can find the best jobs suitable for you. just come and get your best.
            </Text>
          </View>
        </View>
      )
    }
  }

export default PageFour
