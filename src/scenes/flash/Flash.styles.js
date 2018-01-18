import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native'

export default StyleSheet.create(

  {

    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    img:{
      width:Dimensions.get('window').width-20,
      height: Dimensions.get('window').height/2,
      marginRight: '20%'

    }
  }
)
