import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './DrawerScreen.styles'
import {images,colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderDrawer from './HeaderDrawer'

import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'

class ContactUs extends Component{
  constructor(props){
    super(props)
    this.state={
      isRender:false,
      email:null,
      query:null,
    }
  }
  sendContactUs(){
    this.setState({isRender:true})
    data={email:this.state.email,query:this.state.query}
    this.props.sendQuery(data).then(()=>{
        this.setState({isRender:false})
    })
  }

render(){
  return(
    <View style={styles.container}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Contact Us"/>
        <View style={styles.subContainer}>
          <Text style={styles.fontHeading}>
            If you have any query please feel free to contact us.
          </Text>
          <TextInput
            onChangeText={(email)=>{this.setState({email})}}
            placeholder="Your email"
            underlineColorAndroid={colors.appColor}
            maxLength = {160}
            style={styles.textinput}/>
          <TextInput
            onChangeText={(query)=>{this.setState({query})}}
            placeholder="Your Query?"
            underlineColorAndroid={colors.appColor}
            maxLength = {250}
            multiline = {true}
            style={styles.textinput}/>
            <TouchableOpacity onPress={()=>{this.sendContactUs()}} style={styles.submitButton}>
              <Text style={styles.submitText}>
                SEND
              </Text>
            </TouchableOpacity>
            {this.state.isRender===true?<Loader/>:null}
        </View>

    </View>
    )
  }
}
const mapStateToProps=state=>{
  return{

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapDispatchToProps,mapDispatchToProps)(ContactUs);
