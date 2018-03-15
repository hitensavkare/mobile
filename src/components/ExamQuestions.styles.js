import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../theme'
export default StyleSheet.create({
  container: {
  
    backgroundColor:colors.white
  },
  //*******************// *******************// *******************//
  questionContainer:{
    marginLeft: 8,
    marginTop: 10,
    marginRight: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 8,
  },
  radioLabelStyle: {
    fontSize: 16,
    color: colors.appColor,
    ...bs.font.vac_SubcontentFontHeading,
  },
  questionText:{
    ...bs.font.vac_headFont,
    color: colors.appColor,
  },
  radioFormView: {
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: 'row'
  },
  radioLabelView: {
    paddingLeft: 25
  }
})
