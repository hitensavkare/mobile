import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginBottom:56,
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
    flex:0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextColumnContainer:{
    flex:3.5,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textHeader:{
  ...bs.font.vac_contentFont,
    color: colors.appColor,
  },
  subText:{
  ...bs.font.vac_headFont,
  },
  dateText:{
  ...bs.font.vac_SubcontentFontQuickSand,
  },

})
