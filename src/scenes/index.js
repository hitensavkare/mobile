import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Statusbar from '../components/Statusbar'
import {TabNavigator} from 'react-navigation'
import { Drawer } from 'native-base';
import Test from './test'
import Discuss from './discuss'
import Home from './home'
import CallAndAdmiCards from './cc'
import Tabs from 'react-native-tabs'
import {images} from '../theme';
import {Actions} from 'react-native-router-flux';

import {MainHeader,DrawerView} from '../components'
class MainScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'home'
    }
  }

  _tabbedNavigation(){
    switch(this.state.page){
      case 'home':return(<Home><Text>hello</Text></Home>)
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
  openDrawer(){
   this.drawer._root.open()
    //alert('hello')

  }
  _gotoSetting(){
      Actions.Settings()
  }

  closeDrawer(){
    this.drawer._root.close()
  }

  render(){

    return(
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        onClose={() => this.closeDrawer()}
        content={<DrawerView navigator={this.navigator} />}
        >
            <Statusbar/>
          <View style={styles.container}>
            <MainHeader
              onPress={()=>{this.openDrawer()}}
              settings={()=>this._gotoSetting()}
            />
            <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>

              {this._tabbedNavigation()}
            </View>
            <View style={styles.footer}>

              <Tabs selected={this.state.page} style={styles.tabContainer}
                onSelect={el=>this.setState({page:el.props.name})}>
                {this.state.page=='home'?<Image name='home' source={images.homeActive}
                  style={styles.tabImage}/>:<Image name='home' source={images.homeInactive}
                    style={styles.tabImage}/>}
                    {this.state.page=='other'?<Image name='other' source={images.iconOther_active}
                      style={styles.tabImageAdmitCard}/>:<Image name='other' source={images.iconOther_Inactive}
                        style={styles.tabImageAdmitCard}/>}

                        {this.state.page=='test'?<Image name='test' source={images.iconNotifyActive}
                          style={styles.tabImageAdmitCard}/>:<Image name='test' source={images.iconNotifyInActive}
                            style={styles.tabImageAdmitCard}/>}
                            {this.state.page=='discuss'?<Image name='discuss' source={images.icoDiscussActive}
                              style={styles.tabImageAdmitCard}/>:<Image name='discuss' source={images.icoDiscussInactive}
                                style={styles.tabImageAdmitCard}/>}
                              </Tabs>
                            </View>
                          </View>
                        </Drawer>
                      )
                    }
                  }
                  const styles =StyleSheet.create({
                    container: {
                      flex: 1,


                    },

                    tabContainer:{
                      borderTopWidth:0.4,
                      borderTopColor:'#BBDEFB',
                      height:56,
                      backgroundColor: 'white'
                    },
                    tabImage:{
                      height:40,
                      width:40,
                    },
                    tabImageAdmitCard:{
                      height:30,
                      width:30,
                    },
                    viewFooter:{


                    }
                  });
                  export default MainScreen;
