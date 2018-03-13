import React,{Component} from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Picker,
  Modal,
} from 'react-native';
import {Button} from 'native-base';
import HeaderLogin from './HeaderLogin'
import {Actions} from 'react-native-router-flux';
import styles from './Register.style'
import {images,colors} from '../../theme'
class Register extends Component{
  constructor(props){
    super(props);
    this.state={
      gender:'',
      education:'',
      modalVisible:false,
    }
  }
  _toggleModal(visible){
    this.setState({modalVisible:visible})
  }
  _renderChooseAvatarModal(){
  return(
      <Modal animationType={"slide"} onRequestClose={() => null} transparent={true} visible={this.state.modalVisible}>
        <View style={styles.modelMainView}>
          <View style={styles.modelContainer}>
            <TouchableOpacity onPress={()=>{alert('clicked camera')}}>
              <View style={styles.modelImageViews} >
                <Image style={styles.modelCameraAvatar} source={images.iconCamera}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.modeltext}>Camera</Text>
          </View>

          <View style={styles.modelContainer}>
            <TouchableOpacity onPress={()=>{alert('clicked gallary')}}>
              <View style={styles.modelImageViews} >
                <Image style={styles.modelGallaryAvatar} source={images.iconGallary}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.modeltext}>Gallary</Text>
          </View>
          <View style={styles.modelContainer}>
            <TouchableOpacity onPress={() => {
              this._toggleModal(!this.state.modalVisible)
            }}>
            <View style={styles.modelImageViews} >
              <Image style={styles.modelCancelAvatar} source={images.iconClose}/>
          </View>
          </TouchableOpacity>
          <Text style={styles.modeltext}>Cancel</Text>
        </View>
      </View>
    </Modal>
  )
}


  render(){
    return(
      <View style={styles.container}>
          <HeaderLogin onPress={()=>{Actions.pop()}} pageName='Register'/>
          <View style={styles.subContainer}>
            <View style={styles.rowContainer}>
              <TouchableOpacity style={styles.profileimgContainer} onPress={()=>{this._toggleModal(!this.state.modalVisible)}}>
                <Image source={images.profileImage} style={styles.profileImg}/>
              </TouchableOpacity>
              <View style={styles.nameContainer}>
                <TextInput placeholder='Your Name'
                  placeholderTextColor={colors.gray}
                  style={styles.textInput}
                 />
              </View>
            </View>
            <View style={styles.singleRecord}>
              <TextInput placeholder='Your Email'
                placeholderTextColor={colors.gray}
                style={styles.textInput}
               />
            </View>
            <View style={styles.singleRecord}>
              <Picker
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                <Picker.Item label="Your gender" value="NA" />
                <Picker.Item label="Male" value="M" />
                <Picker.Item label="Female" value="F" />
              </Picker>
            </View>
            <View style={styles.singleRecord}>
              <Picker
                selectedValue={this.state.education}
                onValueChange={(itemValue, itemIndex) => this.setState({education: itemValue})}>
                <Picker.Item label="I am" value="NA" />
                <Picker.Item label="Doctorate" value="Doctorate" />
                <Picker.Item label="Post-Graduate" value="Post-Graduate" />
                <Picker.Item label="Graduate" value="Graduate" />
                <Picker.Item label="12th pass" value="12th pass" />
                <Picker.Item label="10th pass" value="10th pass" />
              </Picker>
            </View>
            <View style={styles.singleRecord}>
              <TextInput placeholder='Password'
                placeholderTextColor={colors.gray}
                style={styles.textInput}
               />
            </View>
            <View style={styles.singleRecord}>
              <TextInput placeholder='Confirm Password'
                placeholderTextColor={colors.gray}
                style={styles.textInput}
               />
            </View>

            <View style={styles.registerView}>
              <Button light style={styles.registerButton} onPress={()=>{this._gotoHomeMainWithLoginScreen()}}  >
                <Text style={styles.loginText}>
                  REGISTER
                </Text>
              </Button>
            </View>
          </View>
           {this._renderChooseAvatarModal()}
      </View>
    )
  }
}
export default Register;
