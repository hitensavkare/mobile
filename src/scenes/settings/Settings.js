import React, {Component} from 'react';
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Text,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Statusbar from '@components/Statusbar'
import SettingsHeader from './SettingsHeader'
import styles from './Settings.styles'
import {images} from '../../theme'
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
    };
  }

  _renderContainer() {
    return (
      <ScrollView style={styles.scrollableView} showsVerticalScrollIndicator={false}>
        <View style={styles.listViewMain}>
          <TouchableOpacity style={styles.listView} onPress={() => Actions.Register({operation:'update'})}>
               <Image source={images.iconEditProfile} style={styles.iconPics}></Image>
             <Text style={[styles.listTitle, styles.mdLeftSpace]}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.listView} onPress={() => Actions.ResetPassword()}>
               <Image source={images.resetPassIcon} style={styles.iconPics}></Image>
             <Text style={[styles.listTitle, styles.mdLeftSpace]}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
  render() {
    return (
      <View style={styles.container}>
          <Statusbar/>
      <SettingsHeader onPress={()=>{Actions.pop()}} pageName="Settings"/>

        {this._renderContainer()}
      </View>
    )
  }
}

export default Settings;
