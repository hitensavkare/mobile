import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  subContainer: {
    flex: 1,
    margin: 16,

  },
  QuestionFont:{
    ...bs.font.vac_SubcontentFontQuickSand,

  },
  optionContainer:{
    justifyContent: 'flex-start',
  },
  optionText:{
    ...bs.font.vac_SubcontentFontQuickSand,
    width: '70%'

  },
  mainQuestionContainer:{
    elevation:1,
    borderWidth: 1,
    borderColor:colors.cardBorder,
    backgroundColor:colors.white,
    marginTop: 16,
  //  alignItems:'center',
  },
  QuestionContainer:{
    flexDirection:'row',
    paddingLeft:16,
    paddingRight:8,
  },
  text:{
  ...bs.font.vac_headFont,
  marginRight: 8,
  //  backgroundColor:theme.white
  },
  questionView:{
    flex:3.9,


  },
  personNameText:{
    fontSize:14,
    color:colors.text_alt
  },
  imageBookmarke:{
    flex:0.1,
    justifyContent:'center',
    alignItems: 'center'
  },
  tabImage:{
    height:36,
    width:36,
  },
commentOptionContainer:{
paddingLeft:16,
flexDirection: 'row',
},
commentContainer:{
  paddingLeft: 8,
  paddingRight:8,
  paddingTop:8,
},
commentCard:{
  backgroundColor: colors.white,
  borderRadius: 10,
  borderColor: colors.cardBorder,
  borderWidth: 1,
  marginTop: 4,
},
commentSection:{
  //borderWidth: 1,
//  borderColor: colors.cardBorder,
  flexDirection:'row',

},
commentProfileImg:{
  height: 60,
  width: 60,
  borderRadius: 60/2,

},
commentImgContainer:{
  height: 60,
  width: 60,
  borderRadius: 60/2,
  borderWidth: 1,
  borderColor: colors.appColor,
  justifyContent: 'center',
  alignItems: 'center',
  margin:8,
},
commentText:{
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex:3,

},
profileText:{
  color:colors.text_alt,
  ...bs.font.vac_SubcontentFontHeading,
},
comment:{
    ...bs.font.vac_SubcontentFontQuickSand,
},
bedgeContainer:{
margin: 4,
marginRight:16,
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center'
},
viewMoretext:{
  color:colors.appColor,
...bs.font.vac_SubcontentFontHeading,
},

//style for comment screen
commentBox:{
  flexDirection: 'row',
  borderWidth:1,
  borderColor:colors.cardBorder,
  flex:0.5,justifyContent: 'flex-end',
  alignItems:'center',
  backgroundColor:'white'
},
commentTextInput:{
    ...bs.font.vac_SubcontentFontHeading,
},
sendButton:{
  justifyContent: 'center',alignItems: 'center',flex:1,borderWidth:1,borderRadius:5,height:30,margin:8,
  borderColor: colors.appColor
},
sendButtonText:{
  color:colors.appColor
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
headerSection:{
  flexDirection:'row',
  alignItems:'center',
  flex:1,
  marginLeft:10
},
headerView:{
  backgroundColor:colors.white,
  borderBottomWidth:1,
  elevation: 0,
  borderBottomColor:colors.cardBorder,


},
closeIconContainer:{
  flex:0.5,
  justifyContent:'center',

},
headerTextContainer:{
  flex:3,
  alignItems:'flex-start'
},
headerText:{
  fontFamily:appFonts.QuicksandBold,
  fontSize: 20,
  color: colors.appColor,
},
dateText:{
...bs.font.vac_SubcontentFontQuickSand,
},
rewardTouch:{
  /*height:20,
  width: 20,
  borderRadius: 20/2,
  marginLeft:8,
  marginRight: 8,*/
  justifyContent:'center',alignItems:'center'
},
rewardIcon:{
  height:20,
  width: 20,
  borderRadius: 20/2,
  marginLeft:8,
  marginRight: 8,
}
});
