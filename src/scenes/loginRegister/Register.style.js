import { StyleSheet,Platform } from 'react-native';
import {baseStyle as bs,colors,sizes,appFonts} from '../../theme'
export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer:{
    flex: 1,
    margin: 16,
  },
  rowContainer:{
    flexDirection: 'row',
  },
  profileimgContainer:{

    height: 72,
    width: 72,
    borderRadius: 72/2,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg:{
    height: 72,
    width: 72,
    borderRadius: 72/2,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  nameContainer:{
    flex:3,
    marginLeft: 8,
    justifyContent: 'flex-end',
  },
  singleRecord:{
    marginTop: '3%'
  },
  textInput:{
      ...bs.font.vac_SubcontentFontQuickSand,
  },
  pickerView:{
      ...bs.font.vac_SubcontentFontQuickSand,
  },
  registerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,

  },
  registerButton: {
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

  //model style
  modelMainView: {
   flex: 1,
   justifyContent: 'flex-end',
   backgroundColor:'rgba(255, 255, 255, .85)',
   paddingLeft:16,
 },
 modelContainer: {
   flexDirection: 'row',
   marginRight: 16,
   justifyContent:'flex-start',
   alignItems:'center',
   marginTop:16,
 },
 modelProfileView: {
   height:65,
   width:65,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:65/2,

   backgroundColor:colors.white,elevation:0,

   shadowRadius: 5,
   shadowOpacity: 0.4,
   shadowOffset: {
     width: 0,
     height: 4
   },
 },
 modelProfileAvatar: {
   height: 65,
   width: 65,
   borderRadius:65/2,
   borderRadius:65/2,
   justifyContent:'center',
   alignItems:'center',
   marginTop:-10

 },
 choseAvtartext:{
   paddingLeft:12,
   fontSize:12,
   color:'#8897ad',


 },
 modelImageViews: {
   height: 40,
   width: 40,
   borderRadius:40/2,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor:colors.white,elevation:0,

   shadowRadius: 5,
   shadowOpacity: 0.4,
   shadowOffset: {
     width: 0,
     height: 4
   },
   marginLeft:16,

 },
 modelCameraAvatar: {
   height: 18.1,
   width: 22,

 },
 modelGallaryAvatar: {
   height: 20,
   width: 20,

 },
 modelCancelAvatar: {
   height: 18,
   width: 18,

 },

 modeltext: {
   fontSize: 12,
   marginTop: 15,
     marginLeft:18 ,
   color: '#8897ad',
   ...bs.font.vac_SubcontentFontQuickSand,
   marginBottom:20
 },
 errorMessage:{
   color: 'red',
     ...bs.font.vac_SubcontentFontQuickSand,
 }
});
