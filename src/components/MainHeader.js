import React,{Component} from 'react'
import { Header,Icon,Drawer } from 'native-base';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {colors,appFonts,images} from '../theme'
import DrawerView from './DrawerView'

class MainHeader extends Component{


  render(){
    return(

      <Header style={styles.header} androidStatusBarColor={colors.appColor}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={this.props.onPress}>
          <Icon name='md-menu' style={styles.mdMenuColor}/>
        </TouchableOpacity>
        <View style={{flex:2.5,justifyContent:'center'}}>
          <Text style={styles.headerText}>
            JobSarthi
          </Text>
          </View>
          <TouchableOpacity style={{flex:0.5,justifyContent:'center',alignItems:'center'}} onPress={this.props.onPress}>
          <Image source={images.iconSettings} style={styles.settingIcon}/>
        </TouchableOpacity>
        </View>
      </Header>

    )
  }
}

const styles=StyleSheet.create({
  header:{
    backgroundColor:colors.white,
    borderBottomWidth:1,
    elevation: 0,
    borderBottomColor:colors.cardBorder,
  },
  headerView:{
    flex:1,
    marginLeft:16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText:{
    fontFamily:appFonts.QuicksandBold,
    fontSize: 20,
    color: colors.appColor,
  },
  mdMenuColor:{
    color:colors.appColor,
    marginRight:16,
    marginTop: 4,
  },
  settingIcon:{
    height: 30,
    width: 30,
    borderRadius: 30/2,
    marginTop: 4,
  }

});
export default MainHeader;
