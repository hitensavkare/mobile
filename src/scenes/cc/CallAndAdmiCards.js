import React, { Component } from 'react';
import {
  Platform,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from '@components/screenStyles/CallAndAdmiCards.styles'
import {images} from '../../theme'
//import NotifyRecord from '.../../../components/tupples/NotifyRecord'
import NotifyRecord from '@components/notifyRecord'
import Loader from '@components/Loader'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
class CallAndAdmiCards extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null,
    }
  }
  componentDidMount(){
      this.props.getNotification().then(()=>{
        this.setState({dataSource:this.props.notifyData})
      })
  }
  render(){
    console.log('hello data',this.state.dataSource);
    return(
      <View style={styles.container}>
      {this.state.dataSource===null?
        <Loader/>:
        <FlatList
            data={this.state.dataSource}
          renderItem={({item})=>(<NotifyRecord data={item}/>)}
          keyExtractor={(item,index)=>index.toString()}

        />}
      </View>
    )
  }
}
const mapStateToProps=state=>{
  return{
    notifyData:state.notificationReducer.notificationData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CallAndAdmiCards);
