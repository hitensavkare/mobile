import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Statusbar from '@components/Statusbar'
import HeaderHome from './HeaderHome'
import JobCard from '@components/jobs'
import {bindActionCreators} from  'redux';
import styles from './MainJobs.styles'
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'home',
      dataSource:null,
    }
  //  alert(this.props.Text)
  }
  componentDidMount(){
    this.props.getAds().then(()=>{
      this.setState({dataSource:this.props.adsSource})
    })
  }
  _getId(_id){
      Actions.SubJobs({id:_id})
  }
  render(){
    console.log('data Source=',this.state.dataSource)
    return(
      <View style={styles.container}>
        <Statusbar/>
        <HeaderHome pageName='Jobs' onPress={()=>{Actions.pop()}}/>
        {this.state.dataSource===null?<Loader/>:
          <FlatList
            data={this.state.dataSource}
            renderItem={({item})=>(<JobCard item={item} onPress={()=>this._getId(item._id)}/>)}
            keyExtractor={(item,index)=>index.toString()}
            initialNumToRender={3}
          />
        }

        </View>
    )
  }
}

const mapStateToProps=state=>{
  return{
    adsSource:state.jobReducer.adsSource,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
