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
        
          <View style={styles.middleTextView}>
          <Text style={styles.headerText}>
            {this.props.title}
          </Text>
          </View>
          {this.props.rightIcon==='true'?
            <TouchableOpacity style={{flex:0.5,alignItems:'flex-end',justifyContent:'flex-end'}} onPress={this.props.onPress}>
            <Text style={styles.tryText}>Try Again</Text>
          </TouchableOpacity>:null}

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
    alignSelf: 'center'
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
    alignItems: 'center',
    justifyContent: 'center'
  },

  mdMenuColorView:{
    color:colors.appColor,
    marginRight:16,
    marginTop: 4,
  },
  tryText:{
    color:colors.appColor,
  },
  middleTextView:{
    flex:3,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
export default MainTestHeader;
