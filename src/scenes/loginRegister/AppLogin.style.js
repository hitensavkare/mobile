import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,

    },
      cardView:{
      justifyContent:"center",
      borderRadius:8,
      elevation:0,
      marginBottom:8,
      borderWidth:1,
      borderColor:colors.cardBorder,
      shadowRadius: 10,
      shadowOpacity: 0.4,
      shadowOffset: {
        width: 0,
        height: 4
      },

    },
    headerSection:{
      flexDirection:'row',
      alignItems:'center',
      flex:1,
      marginLeft:10,

    },
    closeIconContainer:{
      flex:0.5,
      justifyContent:'flex-start'
    },
    headerTextContainer:{
      flex:3,
      alignItems:'flex-start'

    },
    headerText:{
      //fontFamily:theme.QuicksandBold,
    //  color:theme.blueGrey,

      fontSize:20,
    },
    subContainer:{
      paddingLeft:10,
      paddingRight:10,
      flex:1,
    },

    headView: {

      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent:'center',
    //  backgroundColor:(Platform.OS==='ios'?'transparent':'') ,
      marginBottom:10,
      marginTop:'4%'
      //marginTop:(Platform.OS==='ios'?-  10:-22)

    },
    headeFont: {
      ...bs.font.vac_headFont,
      fontSize: 36,
      color:colors.appColor,
      alignItems: 'center',
    },

    inputView: {
      width: '100%',

    },
    textInput: {
      marginTop:16,
      fontSize:16,
    },
    inputTextPassword: {
      marginTop:48,
      marginLeft:10,
      marginRight:10,

     marginBottom:10,
     fontSize:16,

     },

    loginView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20,

    },
    loginButton: {
      backgroundColor:colors.white,
      height: 48,
      width: '57%',
      borderRadius: 8,
      borderWidth:1,
      borderColor:colors.cardBorder,
      justifyContent: 'center',
      shadowRadius: 8,
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 4
      },
      elevation:0,

    },
    loginText: {
      ...bs.font.vac_SubcontentFontQuickSand,
      color:colors.appColor,
      fontSize:14

    },

    forgetPassView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:16,


    },
    forgetPass: {
      ...bs.font.vac_SubcontentFontHeading,
    },

    HrLineStyle: {

      marginTop:34,
      fontSize: 13,
      marginBottom:36,
    },
    hr: {},
    hrText: {
      fontWeight: 'bold',
      fontSize: 14
    },

    buttonMainView: {
      justifyContent:'center',
      flex:2,
      marginTop:'10%'

    },
    buttonView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom:30,
    },
    socialButtons: {
      height:48,
      borderRadius: 10,
      width: '46%',

      shadowRadius: 10,
      shadowOpacity: 0.8,
      shadowOffset: {
        width: 0,
        height: 8
      },
      elevation:0,
      backgroundColor:'#3b5998',

    },
    socialButtons2: {
      height:48,
      borderRadius: 10,
      width: '46%',
      backgroundColor:colors.white,
      borderWidth:1,
      borderColor:colors.cardBorder,
      shadowRadius: 8,
      shadowOpacity: 0.5,
      shadowOffset: {
        width: 0,
        height: 8
      },
      elevation:0,
        },
    fbIcon: {
      height: 20,
      width: 10,
      marginRight: 8,
      marginLeft: 3,
      justifyContent: 'center'
    },
    fbIconText: {
      ...bs.font.vac_SubcontentFontQuickSand,
      color:colors.white,
    },
    googleIcon: {
      height: 20,
      width: 20,
      marginRight: 8,
      marginLeft: 5,
      justifyContent: 'center'
    },
    googleIconText: {
      ...bs.font.vac_SubcontentFontQuickSand,

    },
    viewFooterOFRegistration:{

      flexDirection:'row',

      marginLeft:16,
      justifyContent:'flex-end',
      alignItems:'flex-end',


    },
    textRegisterInstruction:{
      flex:1,
    },
    bedgeView:{
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      flexDirection:'row'

    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 44/2,
      backgroundColor:colors.appColor,
      marginLeft:8,
      marginRight:16,
      justifyContent:'center',
      alignItems:'center',
    },
    badgeImage:{
      height:24,
      width:24,
    },
    registerInstrctiontext:{
      fontSize:16,
      ...bs.font.vac_contentFont,

    },
    registerText:{
        ...bs.font.vac_contentFont,
    },
  });
