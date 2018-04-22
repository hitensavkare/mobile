import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './SingleJob.styles'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderHome from './HeaderHome'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class SingleJob extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null,
    }
  }
  componentDidMount(){
    this.props.getSingleJob({id:1}).then(()=>{
      this.setState({
        dataSource:this.props.singleJobResp
      })
    })
  }
  render(){

    return(
      this.state.dataSource===null?
    <Loader/>
      :  <View style={styles.container}>
        <Statusbar/>
        <HeaderHome pageName={this.state.dataSource.postname} onPress={()=>{Actions.pop()}}/>
        <View style={styles.subContainer}>
          {this.state.dataSource.img===null?
          <Image source={images.profileImage}  style={styles.vacancy_logo}/>
        :<Image source={{uri:this.state.dataSource.img}}  style={styles.vacancy_logo}/>}
      </View>
      <ScrollView>
      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Organisation:
        </Text>
        <Text style={styles.textHead2}>
         {this.state.dataSource.org}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Job Location:
        </Text>
        <Text style={styles.textHead2}>
        {this.state.dataSource.location}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Qualifications:
        </Text>
        <Text style={styles.textHead2}>
          {this.state.dataSource.qualification}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Age Limit:
        </Text>
        <Text style={styles.textHead2}>
          {this.state.dataSource.agelimit}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Application Fee:
        </Text>
        <Text style={styles.textHead2}>
        {this.state.dataSource.fees}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Selection Procedure:
        </Text>
        <Text style={styles.textHead2}>
          {this.state.dataSource.selectionProcess}
        </Text>
      </View>


      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Pay Scale:
        </Text>
        <Text style={styles.textHead2}>
          {this.state.dataSource.payScale}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Apply Mode:
        </Text>
        <Text style={styles.textHead2}>
          {this.state.dataSource.applyMode}
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          How to Apply:
        </Text>
        <Text style={styles.textHead2}>
          {this.state.dataSource.howApply}
        </Text>
      </View>
    </ScrollView>

      </View>
    )
  }
}


const mapStateToProps=state=>{
  return{
    singleJobResp:state.jobReducer.singleJobResp
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleJob);
