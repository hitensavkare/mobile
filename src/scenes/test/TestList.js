import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HeaderTest from './HeaderTest'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import styles from './Test.styles'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class TestList extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:[]
    }
  }
  componentDidMount(){
    this.props.getQuestionTestSet({pagname:'qSet'}).then(()=>{
      this.setState({
        dataSource:this.props.testSets
      })
    })
  }
  _gotoInstruction(id){
    AsyncStorage.getItem('isAuthenticateUser').then((value)=>{
    if(value==='false'){
      Actions.Login()
    }
    else{
        Actions.Instruction({_id:id})
    }
  })

  }
  render(){
    return(
      <View style={styles.containerTestSeries}>
        <Statusbar/>
        <HeaderTest pageName='Test Series'/>
        {this.state.dataSource.length<=0?<Loader/>:
        this.state.dataSource.map((data,index)=>{
          return(

            <TouchableOpacity key={index} onPress={()=>{this._gotoInstruction(data._id)}} style={styles.rowContainer}>
              <View style={styles.imageColumnContainer}>
                <Image source={images.introTest} style={{height:40,width:40}}/>
              </View>
              <View style={styles.TextColumnContainer}>
            <Text style={styles.textHeader}>{data.heading}</Text>
              <Text style={styles.subText}>{data.created}</Text>
          </View>
          </TouchableOpacity>
          )
        })
      }

      </View>
    )
  }
}

const mapStateToProps=state=>{
  return{
   testSets:state.testReducers.testSet
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TestList);
