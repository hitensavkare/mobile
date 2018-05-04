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
class Years extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:null
    }
  }
  componentDidMount(){
//  alert(this.props.tagId)
  this.props.getYears({pagname:'years',tagId:this.props.tagId}).then(()=>{
    this.setState({dataSource:this.props.years})
  })
  }
  getPapers(year){
  Actions.PdfContainer({year:year})
  }
  render(){
    return(
      <View style={styles.containerTestSeries}>
        <Statusbar/>
        <HeaderTest pageName='Years'/>
          {this.state.dataSource===null?<Loader/>:
            this.state.dataSource.map((data,key)=>{
              //Code for rendering the question paper sets
              return(
              <TouchableOpacity key={key} onPress={()=>{this.getPapers(data.year)}} style={styles.rowContainer}>
                <View style={styles.imageColumnContainer}>
                  <Image source={images.introTest} style={{height:40,width:40}}/>
                </View>
                <View style={styles.TextColumnContainer}>
                <Text style={styles.textHeader}>{data.year}</Text>

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
   years:state.testReducers.years
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Years);
