import { StyleSheet } from 'react-native';
import {baseStyle as bs,colors,sizes} from '../../theme'
export default StyleSheet.create({
  container:{
  flex:1,
  backgroundColor:'white'
},
subContainer:{
  marginTop: 8,
  alignItems: 'center',
  justifyContent:'center'

},
vacancy_logo:{
  height:150,
  width: 150,
   resizeMode:'cover',
borderRadius: 8,
},
recordContainer:{
  margin:8,
},
textHead:{
...bs.font.vac_headFont
},
textHead2:{
  ...bs.font.vac_contentFont
},
link:{
color:colors.appColor,
},
impDateContainer:{
  ...bs.align.center,
  marginTop:8,
  marginBottom:8,
},
dateContainer:{
  flexDirection: 'row',
},
fromDate:{
  flex:1,
  ...bs.align.center_start
},
toDate:{
  flex:1,
  ...bs.align.center_end
},
subHeadingText:{
  ...bs.font.vac_SubcontentFontHeading,

},
subText:{
  ...bs.font.vac_SubcontentFont
},
float:{
  position:'absolute',bottom:0,right:0
},
floatView:{
  height:70,
  width: 70,
  borderRadius:70/2,
  backgroundColor:colors.appColor,
  ...bs.align.center,
},
footerIconView:{
  flexDirection: 'row',
  borderTopWidth: 0.5,
  borderTopColor:colors.cardBorder,
  marginLeft: -8,
  marginRight: -8,
  paddingTop:4,
  justifyContent:'space-between',
  alignItems:'center'


},
imageIconLike:{
  height:28,
  width: 28,
  marginLeft:8,
  marginRight:4,
},
imageIcon:{
  height:32,
  width: 32,
  marginRight:8,
  marginLeft:8,
},
//Style for Job Search
searchContainer:{
  flex:1,
  backgroundColor: colors.white,
}
});
