import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {TabNavigator} from 'react-navigation'
import Test from './test'
import Discuss from './discuss'
import Home from './home'
import CallAndAdmiCards from './cc'
import Tabs from 'react-native-tabs';

const icoDiscussActive=require('../assets/images/ic_clients_active.png')
const icoDiscussInactive=require('../assets/images/ic_clients_inactive.png')
const iconNotifyActive=require('../assets/images/ic_notif_active.png')
const iconNotifyInActive=require('../assets/images/ic_notif_inactive.png')
const iconOther_active=require('../assets/images/other_active.png')
const iconOther_Inactive=require('../assets/images/other_inActive.png')

class MainScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'home'
    }
  }

  _tabbedNavigation(){
    switch(this.state.page){
      case 'home':return(<Home/>)
      break;
      case 'discuss':return(<Discuss/>)
      break;
      case  'test':return(<Test/>)
      break;
      case 'other':return(<CallAndAdmiCards/>)
      break;
      default:
    }
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
          {this._tabbedNavigation()}
        </View>


          <View style={styles.footer}>
                  <Tabs selected={this.state.page} style={styles.tabContainer}
                    onSelect={el=>this.setState({page:el.props.name})}>

                    {this.state.page=='home'?<Image name='home' source={icoDiscussActive}
                    style={styles.tabImage}/>:<Image name='home' source={icoDiscussInactive}
                    style={styles.tabImage}/>}
                    {this.state.page=='other'?<Image name='other' source={iconOther_active}
                    style={styles.tabImage}/>:<Image name='other' source={iconOther_Inactive}
                    style={styles.tabImage}/>}

                    {this.state.page=='test'?<Image name='test' source={iconNotifyActive}
                    style={styles.tabImage}/>:<Image name='test' source={iconNotifyInActive}
                    style={styles.tabImage}/>}
                    {this.state.page=='discuss'?<Image name='discuss' source={icoDiscussActive}
                    style={styles.tabImage}/>:<Image name='discuss' source={icoDiscussInactive}
                    style={styles.tabImage}/>}
                    </Tabs>
              </View>
          </View>
                    )
                  }
                }
                const styles =StyleSheet.create({
                  container: {
                    flex: 1,

                  },

                  tabContainer:{
                    borderTopWidth:0.4,
                    borderTopColor:'#b0bec5',
                    height:56,


                  },
                  tabImage:{
                    height:36,
                    width:36,
                  },
                  viewFooter:{

                  }
                });
                export default MainScreen;
