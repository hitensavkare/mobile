import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
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
import RNFetchBlob from 'react-native-fetch-blob';
import {Rewarded_video} from '@app/keys'
import {
  AdMobRewarded
} from 'react-native-admob'
class PdfContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null
    }
  }
  componentDidMount(){
    AdMobRewarded.setAdUnitID(Rewarded_video);
    AdMobRewarded.requestAd().then(() => AdMobRewarded.showAd());

  //  alert(this.props.year)
    this.props.getPdfs({pagname:'questionPapers',year:this.props.year}).then(()=>{
      this.setState({dataSource:this.props.pdfData})
    })
  }
  _downLoadPaper(url){
//    alert(id)
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
    return(
      <View style={styles.containerTestSeries}>
        <Statusbar/>
        <HeaderTest pageName={this.props.year}/>
        <View style={{flex:1}}>
          <View style={{flex:3.5}}>
          {this.state.dataSource===null?<Loader/>:
            <FlatList
              data={this.state.dataSource}
                  keyExtractor={(item,index)=>index.toString()}
                    initialNumToRender={3}
              renderItem={({item,index}) =>
              <TouchableOpacity key={index} style={styles.rowContainer} onPress={()=>{this._downLoadPaper(item.url)}}>
                <View style={styles.imageColumnContainer}>
                  <Image source={images.introTest} style={{height:40,width:40}}/>
                </View>
                <View style={styles.TextColumnContainer}>
                <Text style={styles.textHeader}>{item.heading}</Text>
                <Text style={styles.subText}>Posted on {item.created}</Text>
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
   pdfData:state.testReducers.pdfData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PdfContainer);
