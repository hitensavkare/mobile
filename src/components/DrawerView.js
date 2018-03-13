import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import styles from './DrawerView.styles'
import {images} from '../theme';
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
          <View style={styles.contentRow}>
            <Image source={images.icoDiscussActive} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
             Result Analysis
            </Text>
          </View>
        </View>

        <View style={styles.userSection}>
          <View>
            <Text style={styles.contentHeader}>APPLICATION SECTION</Text>
          </View>
          <View style={styles.contentRow}>
            <Image source={images.icoDiscussActive} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            Contact Us
            </Text>
          </View>
          <View style={styles.contentRow}>
            <Image source={images.icoDiscussActive} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            About Us
            </Text>
          </View>
          <View style={styles.contentRow}>
            <Image source={images.icoDiscussActive} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            Logout
            </Text>
          </View>
        </View>
      </View>

    );
  }
}
export default DrawerView;
