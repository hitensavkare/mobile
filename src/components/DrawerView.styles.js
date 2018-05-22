import { StyleSheet } from 'react-native';
import {baseStyle as bs,colors,sizes} from '../theme'
export default StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:colors.white
},
profileContainer:{
  height:(sizes.height)/3,
  //backgroundColor:'blue',
  justifyContent: 'center',
  alignItems:'center',
  marginTop: 16,
},
profileImage:{
  height:(sizes.height)/3,
  width: '100%',
  resizeMode: 'stretch'
},
userSection:{
  margin:8,
},
contentHeader:{
  ...bs.font.vac_SubcontentFontHeading,
  color:colors.appColor
},
contentText:{
  ...bs.font.vac_SubcontentFontQuickSand,
},
contentRow:{
  flexDirection:'row',
  alignItems:'center',
  margin:8

},
contentIcon:{
  height:32,
  width: 32,
  marginRight:8,
}
});
