import { StyleSheet } from 'react-native';
import {baseStyle as bs,colors,sizes} from '../../theme'
export default StyleSheet.create({  //*******************// *******************// *******************//
  container: {
    flex: 1,
    backgroundColor: colors.white
  /*  ...Platform.select({
      ios: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
      }
    })*/
  },
  mdLeftSpace: {
    marginLeft: 30
  },
  smLeftSpace: {
    marginLeft: 10
  },
  smBottomSpace: {
    marginBottom: 10
  },
  //*******************// *******************// *******************//
  scrollableView: {
    marginTop: 15
  },
  //*******************// *******************// *******************//
  listViewMain: {
    width:'100%',
    padding: 10
  },
  listView: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  //*******************// *******************// *******************//
  iconPics: {
    height: 40,
    width: 40
  },
  listTitle: {
    ...bs.font.vac_headFont,
    color: colors.appColor,
//    fontSize: 16,
//    fontWeight:font.q,
  //  fontFamily: theme.appFont
  },
  
  //*******************// *******************// *******************//

  //*******************//

});
