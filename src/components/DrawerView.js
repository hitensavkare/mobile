import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './DrawerView.styles'
import {images} from '../theme';
import {Actions} from 'react-native-router-flux';
class DrawerView extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={images.profileImage} style={styles.profileImage}/>
        </View>
        <View style={styles.userSection}>
          <View>
            <Text style={styles.contentHeader}>USER SECTION</Text>
          </View>
          <View style={styles.contentRow}>
            <Image source={images.bookmarmActive} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
              Bookmarks
            </Text>
          </View>
          <TouchableOpacity onPress={()=>{Actions.ResultAnalysis()}}  style={styles.contentRow}>
            <Image source={images.iconResultAnalisys} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
             Result Analysis
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userSection}>
          <View>
            <Text style={styles.contentHeader}>APPLICATION SECTION</Text>
          </View>
          <TouchableOpacity onPress={()=>{Actions.ContactUs()}} style={styles.contentRow}>
            <Image source={images.iconContactUs} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            Contact Us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Actions.AboutUs()}} style={styles.contentRow}>
            <Image source={images.iconAbout} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            About Us
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Actions.Feedback()}} style={styles.contentRow}>
            <Image source={images.iconFeedback} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            feedback
            </Text>
          </TouchableOpacity>
          <TouchableOpacity   style={styles.contentRow}>
            <Image source={images.iconLogout} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
export default DrawerView;
