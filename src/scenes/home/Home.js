import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './Home.styles'
import {images} from '../../theme'
class Home extends Component{
  _gotoSearchScreen(){
    Actions.Search()
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity style={styles.rowContainer} onPress={()=>{Actions.MainJobs()}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Latest Jobs</Text>
          <Text style={styles.subText}>Contains questions set.</Text>
      </View>
    </TouchableOpacity>
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Bank Jobs</Text>
          <Text style={styles.subText}>Contains questions set.</Text>
      </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Railway Jobs</Text>
          <Text style={styles.subText}>Contains questions set.</Text>
      </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Engineering Jobs</Text>
          <Text style={styles.subText}>5+ years of previous papers</Text>
        </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>PSU Jobs</Text>
          <Text style={styles.subText}>5+ years of previous papers</Text>
        </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Civil Services Jobs</Text>
          <Text style={styles.subText}>5+ years of previous papers</Text>
        </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Other Jobs</Text>
          <Text style={styles.subText}>5+ years of previous papers</Text>
        </View>
        </View>
      </ScrollView>
      <View style={styles.float}>
        <TouchableOpacity style={styles.floatView} onPress={()=>{this._gotoSearchScreen()}}>

          <Text style={styles.subHeadingText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

export default Home;
