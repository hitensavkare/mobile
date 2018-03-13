import React,{Component} from 'react'
import { Header,Icon } from 'native-base';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
;import DrawerView from '../../components/DrawerView'
import {colors,appFonts,images} from '../../theme';

class MainTestHeader extends Component{
  render(){
    return(

      <Header style={styles.header} androidStatusBarColor={colors.appColor}>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.backButton} >
          <Image source={images.iconBack} style={styles.mdMenuColor}/>
        </TouchableOpacity>
          <Text style={styles.headerText}>
            JobSarthi
          </Text>
          <TouchableOpacity style={{flex:0.5}} onPress={this.props.onPress}>
          <Icon name='md-menu' style={styles.mdMenuColorView}/>
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
  backButton:{
    flex:0.5
  },
  headerText:{
    fontFamily:appFonts.QuicksandBold,
    fontSize: 20,
    color: colors.appColor,
    flex: 3
  },
  mdMenuColor:{
    marginRight:'5%',
    marginTop: 4,
    height: 24,
    width: 24,
  },
  headerView:{
    flex:1,
    marginLeft:16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  mdMenuColorView:{
    color:colors.appColor,
    marginRight:16,
    marginTop: 4,
  }

});
export default MainTestHeader;
