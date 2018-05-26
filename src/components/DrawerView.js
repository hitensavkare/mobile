import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import styles from './DrawerView.styles'
import {images} from '../theme';
import {Actions} from 'react-native-router-flux';
import AsyncSetting from '../app/AsyncSetting'
class DrawerView extends Component{
  constructor(props){
    super(props)
    this.state={
      isAuthUser:false,
      imgUrl:null,
    }
  }
  componentDidMount(){

    AsyncStorage.getItem('imgUrl').then((value)=>{
  this.setState({imgUrl:value})
  })

    AsyncStorage.getItem('isAuthenticateUser').then((value)=>{
      alert(value)
    this.setState({isAuthUser:value})
  })



  }
  _logout(){
    AsyncSetting.setAuthenticationUserFlag('false');
    AsyncSetting.setGuestFlag('false')
      AsyncSetting.setUrl(null)
      AsyncSetting.setId(null)
    Actions.Intro({type:'reset'})
  //  console.log('hey flag',      AsyncSetting.getuthenticationUserFlag())
    //  console.log('hey gues inside method',      AsyncSetting.getGuestFlag())*/
  }
  componentWillMount(){
  //  console.log('hey auth suer',      AsyncSetting.getuthenticationUserFlag())
    //  console.log('hey flag',      AsyncSetting.getGuestFlag())

  }
  render(){
    //alert(this.state.isAuthUser)
  //  alert(this.state.imgUrl)
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          {this.state.imgUrl==='null' || this.state.imgUrl===null || this.state.imgUrl==='' || this.state.imgUrl==='undefined'?
            <Image source={images.guestImg} style={styles.profileImage}/>
            :
            <Image source={{uri:this.state.imgUrl}} style={styles.profileImage}/>
          }

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
          {this.state.isAuthUser===false?
          <TouchableOpacity  onPress={()=>{Actions.Login()}}  style={styles.contentRow}>
            <Image source={images.iconLogin} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            Login
            </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity  onPress={()=>{this._logout()}}  style={styles.contentRow}>
            <Image source={images.iconLogout} style={styles.contentIcon}/>
            <Text style={styles.contentText}>
            Logout
            </Text>
          </TouchableOpacity>
        }
        </View>
      </View>

    );
  }
}
export default DrawerView;
