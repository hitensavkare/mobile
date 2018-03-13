import { StyleSheet,Dimensions} from 'react-native';
import {baseStyle as bs,colors,sizes} from '../../theme'
const screenSize = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
IntroContainer:{
  width: '100%',
  height:'100%'
},
containerIntro:{
  flex:1,
  paddingVertical: '20%'
},
  linearGradient: {
    flex: 1
  },
  //*******************//
  screenView: {
    flex: 7,
    height:'100%'
  },
  //*******************//
  buttonMainView: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    ...bs.align.center,
  },

buttonRow:{
  flexDirection: 'row',
},
introImageContainer:{

  justifyContent: 'center',
  alignItems: 'center'
},
introOne:{
  height:150,
  width: 150
},
introTextHeading:{
  ...bs.font.vac_headFont,
  textAlign: 'center',
  marginTop:'20%',
  marginBottom: 16,
},
introText:{
    ...bs.font.vac_SubcontentFontQuickSand,
    color:colors.appColor,
    textAlign:'center',
    paddingHorizontal:16,
},
buttonContainer:{
  flex:1,
  ...bs.align.center,
  ...bs.layout.buttonStyle,
},
buttonText:{
  ...bs.font.vac_contentFont,
  color:colors.appColor,
},

});
