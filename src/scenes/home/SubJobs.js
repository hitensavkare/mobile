import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {
  AdMobBanner,
} from 'react-native-admob'
import {Banner} from '@app/keys'
import {Actions} from 'react-native-router-flux';
import styles from './SubJobs.style'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderHome from './HeaderHome'
import JobCard from '@components/jobs'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class SubJobs extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null,
    }
    //alert(this.props.id)
  }

  componentDidMount(){
    this.props.getSubJobs({id:this.props.id}).then(()=>{
      this.setState({
        dataSource:this.props.subJobData
      })
    })
  }
  _getId(_id){
    Actions.SingleJob({jobId:_id})
  }
  render(){

      return(
      <View style={styles.container}>
          <Statusbar />
        <HeaderHome pageName='Sub Jobs' onPress={()=>{Actions.pop()}}/>
        <View style={{flex:1}}>
          <View style={{flex:3.5}}>
            {this.state.dataSource===null?<Loader/>:
            <FlatList
              data={this.state.dataSource}
              renderItem={({item})=>(<JobCard item={item} onPress={()=>this._getId(item._id)}/>)}
              keyExtractor={(item,index)=>index.toString()}
              initialNumToRender={3}
            />
    }
          </View>
          <View style={{flex:0.5,width:'100%',marginBottom:-5}}>
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
    subJobData:state.jobReducer.subResp
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SubJobs);
