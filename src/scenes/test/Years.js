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
import {Banner} from '@app/keys'
import {
  AdMobBanner,
} from 'react-native-admob'
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
        <View style={{flex:1}}>
          <View style={{flex:3.5}}>
        <HeaderTest pageName='Years'/>
          {this.state.dataSource===null?<Loader/>:
              //Code for rendering the question paper sets4
              <FlatList
                data={this.state.dataSource}
                    keyExtractor={(item,index)=>index.toString()}
                      initialNumToRender={3}
                renderItem={({item,index}) =>
                  <TouchableOpacity key={index} onPress={()=>{this.getPapers(item.year)}} style={styles.rowContainer}>
                    <View style={styles.imageColumnContainer}>
                      <Image source={images.introTest} style={{height:40,width:40}}/>
                    </View>
                    <View style={styles.TextColumnContainer}>
                    <Text style={styles.textHeader}>{item.year}</Text>

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
   years:state.testReducers.years
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Years);
