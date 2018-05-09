import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  timeContainer: {
    backgroundColor:colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    flex:0.5,
    },
    container: {
      backgroundColor:colors.white
    },
  containerTestSeries:{
    flex: 1,
    backgroundColor: colors.white
  },
  questionSetContainer:{
    flex:3
  },
  buttonContainer:{
    flex:0.5,
    backgroundColor:colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row'

  },
  prevButton:{
    elevation: 0,
    marginTop: 8,
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor:colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitContainer:{
    flex:2,
    borderWidth: 1,
    marginLeft: 32,
    marginRight: 32,
    borderRadius: 8,
    borderColor:colors.appColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%'
  },
  submitText:{
    ...bs.font.vac_SubcontentFontHeading,
    fontSize: 16,
    color:colors.appColor,
  },
  nextButton:{
    elevation: 0,
    marginTop: 8,
    borderWidth: 1,
    height: 50,
    width: 50,
    borderRadius: 50/2,
    backgroundColor:colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPrevNext:{
    width:40,height:40
  },
  watchText:{
  ...bs.font.vac_SubcontentFontHeading,
    fontSize: 12,
    color: 'blue',
    marginTop: -16,
  },
  subText:{
  ...bs.font.vac_SubcontentFontHeading,
  },
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
  selectedText: {
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
  },
  optionView:{
    flex:1,
    backgroundColor: colors.white
  },
  optionViewButton:{
    marginLeft: 8,
    flex:1,
    marginTop: 10,
    marginRight: 8,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: 8,
  },
  optionViewSelectedButton:{
    marginLeft: 8,
    flex:1,
    marginTop: 10,
    marginRight: 8,
    padding: 4,
    borderWidth: 1,
    backgroundColor: colors.cardBorder,
    borderRadius: 8,
    borderColor: colors.appColor
  }
})
