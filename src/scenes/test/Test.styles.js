import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginBottom:56,
    justifyContent:'center',
  },
  containerTestSeries:{
    flex: 1,
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
  marksText:{
    ...bs.font.vac_headFont,
      color: colors.appColor,
  },
  marksContainer:{
    ...bs.align.center
  },
  queNoContainer:{
    flex:0.5,
      ...bs.align.center,
        borderWidth: 1,
        borderColor: colors.cardBorder
  },
  ansContainer:{
    flex:3,
      ...bs.align.center,
      borderWidth: 1,
        borderColor: colors.cardBorder
  },
  ansText:{
    ...bs.font.vac_headFont,
      color: colors.appColor
  },
  ansKeyContainer:{
    flexDirection:'row',justifyContent:'center',alignItems:'center'
  }

})
