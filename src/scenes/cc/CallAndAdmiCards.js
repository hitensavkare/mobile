import React, { Component } from 'react';
import {
  Platform,
  FlatList,
  View,
  ActivityIndicator,
  link,
  Linking
} from 'react-native';
import styles from '@components/screenStyles/CallAndAdmiCards.styles'
import {images} from '../../theme'
//import NotifyRecord from '.../../../components/tupples/NotifyRecord'
import NotifyRecord from '@components/notifyRecord'
import Loader from '@components/Loader'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';
import RNFetchBlob from 'react-native-fetch-blob';
import {Interstitial} from '@app/keys'
import {
  AdMobInterstitial,
} from 'react-native-admob'
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
  _gotoUrl(_url){
    alert(_url)
    Linking.openURL(_url);
  }
  _getPdf(url){
    AdMobInterstitial.setAdUnitID(Interstitial);
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

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
          alert(  resp.path())
          resp.path()
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
          renderItem={({item})=>(<NotifyRecord
            gotoUrl={()=>{this._gotoUrl(item.url)}}
            getPdf={()=>{this._getPdf(item.pdf)}}
             data={item}/>)}
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
