import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image
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
class PdfContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null
    }
  }
  componentDidMount(){
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
          {this.state.dataSource===null?<Loader/>:
            this.state.dataSource.map((data,key)=>{
              //Code for rendering the question paper sets
              return(
              <TouchableOpacity key={key} style={styles.rowContainer} onPress={()=>{this._downLoadPaper(data.url)}}>
                <View style={styles.imageColumnContainer}>
                  <Image source={images.introTest} style={{height:40,width:40}}/>
                </View>
                <View style={styles.TextColumnContainer}>
                <Text style={styles.textHeader}>{data.heading}</Text>
                <Text style={styles.subText}>Posted on {data.created}</Text>
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
   pdfData:state.testReducers.pdfData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PdfContainer);
