import React,{Component} from 'react'
import { Header,Icon} from 'native-base';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {colors,appFonts,images} from '../../theme'

class HeaderHome extends Component{
  render(){
    return(
      <Header style={styles.header} androidStatusBarColor={colors.appColor}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={this.props.onPress}>
          <Image source={images.iconBack} style={styles.mdMenuColor}/>
        </TouchableOpacity>
          <Text style={styles.headerText}>
            {this.props.pageName}
          </Text>
          <TouchableOpacity style={styles.rightButton}>
            <Text style={styles.leftButton}>{this.props.rightButton}</Text>
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
    marginLeft:'3%',
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
    marginRight:'5%',
    marginTop: 4,
    height: 24,
    width: 24,

  }

});
export default HeaderHome;
