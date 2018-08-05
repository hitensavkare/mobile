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
  subContainer:{
    backgroundColor: colors.white,
    flex:1,
    padding: 8,
  },
  rowContainer:{
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,

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
  },
  InstructionText:{
    color: colors.appColor,
    ...bs.font.vac_headFont,
    margin: 8,
    textAlign: 'center'
  },
  submitContainer:{
    height: 48,
    borderWidth: 1,
    marginLeft: 32,
    marginRight: 32,
    borderRadius: 8,
    borderColor:colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText:{
    ...bs.font.vac_SubcontentFontHeading,
    fontSize: 16,
    color:colors.appColor,
  },

})
