import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Image,
  AsyncStorage
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
class PrevQuestionPaper extends Component{
  constructor(props){
    super(props);
    this.state={
      dataSource:[]
    }
  }
  componentDidMount(){
    this.props.getQuestionPaperSets({pagname:'sets'}).then(()=>{
      this.setState({
        dataSource:this.props.questionSet
      })
    })
  }

  getPapers(id){
//    alert(id)
AsyncStorage.getItem('isAuthenticateUser').then((value)=>{
if(value==='false'){
  Actions.Login()
}
else{
    Actions.Years({tagId:id})
}
})


  }

  render(){
  //  console.log('hey data',this.state.dataSource);
    return(
      <View style={styles.containerTestSeries}>
        <Statusbar/>
        <HeaderTest pageName='Question Paper Sets'/>
          {this.state.dataSource===null?<Loader/>:
            this.state.dataSource.map((data,key)=>{
              //Code for rendering the question paper sets
              return(
              <TouchableOpacity key={key} onPress={()=>{this.getPapers(data._id)}} style={styles.rowContainer}>
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
   questionSet:state.testReducers.questionSetData
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PrevQuestionPaper);
