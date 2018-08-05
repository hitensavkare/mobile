import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    marginBottom:56,
    },
    cardContainer:{
      marginLeft: 8,
      marginRight: 8,
      marginTop: 8,
      borderWidth: 1,
      borderColor: colors.cardBorder,
      borderRadius: 8,
      backgroundColor: 'white'
    },
    rowContainer:{
    flexDirection: 'row',
  },
  imageColumnContainer:{
    flex:0.5,
    justifyContent: 'flex-start',
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
  iconRowContainer:{
    flexDirection: 'row',
    flex:1,
    width: '100%',
    borderTopWidth: 0.5,
    borderTopColor:colors.cardBorder,
    paddingTop:4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft:'2%',
  },
  shareContainer:{
    flex:0.5,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 4,
    marginRight: 8,
  },
  imageIcon:{
    height:32,
    width: 32,
  },
  imagePdf:{
    height:28,
    width: 28,
  },
  bottonRowICons:{
    flex:0.5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }

})
