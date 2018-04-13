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
import {Actions} from 'react-native-router-flux';
import styles from './SubJobs.style'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderHome from './HeaderHome'
import JobCard from '@components/jobs'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
class SubJobs extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:[],
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
    alert(_id )
  }
  render(){
      return(
      <View style={styles.container}>
          <Statusbar />
        <HeaderHome pageName='Sub Jobs' onPress={()=>{Actions.pop()}}/>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(<JobCard item={item} onPress={()=>this._getId(item._id)}/>)}
          keyExtractor={(item,index)=>index.toString()}
          initialNumToRender={3}
        />
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
