import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
  AsyncStorage,
  FlatList
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
import {Banner} from '@app/keys'
import {
  AdMobBanner,
} from 'react-native-admob'
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
        <View style={{flex:1}}>
          <View style={{flex:3.5}}>
        {this.state.dataSource.length<=0?<Loader/>:
          <FlatList
            data={this.state.dataSource}
                keyExtractor={(item,index)=>index.toString()}
                  initialNumToRender={3}
            renderItem={({item,index}) =>
            <TouchableOpacity key={index} onPress={()=>{this._gotoInstruction(item._id)}} style={styles.rowContainer}>
              <View style={styles.imageColumnContainer}>
                <Image source={images.introTest} style={{height:40,width:40}}/>
              </View>
              <View style={styles.TextColumnContainer}>
            <Text style={styles.textHeader}>{item.heading}</Text>
              <Text style={styles.subText}>{item.created}</Text>
          </View>
          </TouchableOpacity>
            }
          />

      }
    </View>
    <View style={{flex:0.5,width:'100%',alignItems:'center',justifyContent: 'flex-end'}}>
        <AdMobBanner
    adSize="fullBanner"
    adUnitID={Banner}
    testDevices={[AdMobBanner.simulatorId]}
    onAdFailedToLoad={error =>alert(error)}
    />
  </View>
</View>
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
