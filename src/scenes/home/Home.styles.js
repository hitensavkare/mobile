import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginBottom:58,
    justifyContent:'center',
  },
  rowContainer:{
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    height: 58,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  imageColumnContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextColumnContainer:{
    flex:3.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textHeader:{
  ...bs.font.vac_headFont,
    fontSize: 18,
    color: colors.appColor,
  },
  subText:{
  ...bs.font.vac_SubcontentFontHeading,
  },
  float:{
    position:'absolute',bottom:0,right:0,marginRight:10,
  },
  floatView:{
    height:70,
    width: 70,
    borderRadius:70/2,
    backgroundColor:colors.appColor,
    ...bs.align.center,
  },
  subHeadingText:{
    ...bs.font.vac_SubcontentFontHeading,
    fontSize: 12,
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
})
