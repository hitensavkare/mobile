import React,{Component} from 'react'
import { Header,Icon,Drawer } from 'native-base';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {colors,appFonts} from '../theme'
import DrawerView from './DrawerView'

class MainHeader extends Component{


  render(){
    return(

      <Header style={styles.header} androidStatusBarColor={colors.appColor}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={this.props.onPress}>
          <Icon name='md-menu' style={styles.mdMenuColor}/>
        </TouchableOpacity>
          <Text style={styles.headerText}>
            JobSarthi
          </Text>
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
  }

});
export default MainHeader;
