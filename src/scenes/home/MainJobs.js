import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Linking,

} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Statusbar from '@components/Statusbar'
import HeaderHome from './HeaderHome'
import JobCard from '@components/jobs'
import styles from './MainJobs.styles'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import Loader from '@components/Loader'
import RNFetchBlob from 'react-native-fetch-blob';
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'home',
      dataSource:null,
    }
  }
  componentDidMount(){
    this.props.getAds({category:this.props.title}).then(()=>{
      this.setState({dataSource:this.props.adsSource})
    })
  }
  _getId(_id){
      Actions.SubJobs({id:_id})
  }
  _gotoUrl(_url){
    Linking.openURL(_url);
  }
  _getPdf(url){
    RNFetchBlob
        .config({
            addAndroidDownloads : {
                useDownloadManager : true, // <-- this is the only thing required
                // Optional, override notification setting (default to true)
                notification : true,
                // Optional, but recommended since android DownloadManager will fail when
                // the url does not contains a file extension, by default the mime type will be text/plain
                mime : 'application/pdf',
                description : 'File downloaded by download manager.'
            }
        })
        .fetch('GET', url)
        .then((resp) => {
          // the path of downloaded file
          resp.path()
        })
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
            renderItem={({item})=>(<JobCard item={item}
               onPress={()=>this._getId(item._id)}
               gotoUrl={()=>{this._gotoUrl(item.url)}}
               getPdf={()=>{this._getPdf(item.pdf)}}
             />)}
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
