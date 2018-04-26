import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
container:{
  flex:1,
  backgroundColor: colors.white
},
subContainer:{
    ...bs.align.center,
    flex:1,
    marginLeft:8,
    marginRight: 8,

},
fontHeading:{
    ...bs.font.vac_contentFont,
},
textinput:{
  width: '100%',
  ...bs.font.vac_contentFont
},
submitButton: {
  backgroundColor:colors.white,
  height: 48,
  width: '57%',
  borderRadius: 8,
  borderWidth:1,
  borderColor:colors.cardBorder,
  justifyContent: 'center',
  alignItems: 'center',
  shadowRadius: 8,
  shadowOpacity: 0.5,
  shadowOffset: {
    width: 0,
    height: 4
  },
  elevation:0,

},
submitText: {
  ...bs.font.vac_SubcontentFontQuickSand,
  color:colors.appColor,
  fontSize:16

},
})
