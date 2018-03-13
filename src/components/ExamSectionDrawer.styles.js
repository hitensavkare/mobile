import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../theme'
export default StyleSheet.create({
container:{
  flex:1,
  backgroundColor: colors.white,
  marginTop: 24,
},
aptiSection:{
marginTop: 16,

},
sectionHeaderText:{
...bs.font.vac_headFont,
marginLeft:10
},
records:{
  flexDirection: 'row',
  flex: 1,
  flexWrap: 'wrap',
},
singleQuesNum:{
  flexDirection: 'row',
  height: 30,
  width: 30,
  borderRadius: 30/2,
  borderWidth: 1,
  borderColor: colors.cardBorder,
  margin:8,
  justifyContent: 'center',
  alignItems: 'center',
},
numberText:{
  color: colors.appColor,
  ...bs.font.vac_SubcontentFontHeading,
}
})
