import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './SingleJob.styles'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderHome from './HeaderHome'
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';

class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      state:'NA',
      category:'NA',
    }
  }
  componentDidMount(){

  }
  _searchData(){
    if(this.state.state==='NA' && this.state.category==='NA'){
      alert("Please set search conditions");
    }
    else if(this.state.state==='NA'){
      alert('Please select state')
    }
    else if(this.state.category==='NA'){
      alert("Please select category")
    }
    else {
          Actions.MainJobs({title:this.state.state,category:this.state.category})
    }

  }
  render(){
    return(
      <View style={styles.searchContainer}>
        <Statusbar/>
        <HeaderHome rightButton='Search' searchData={()=>{this._searchData()}} pageName='Search Jobs' onPress={()=>{Actions.pop()}}/>
        <View>
          <Picker
            selectedValue={this.state.category}
            onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
            <Picker.Item label="Choose Job Category" value="NA" />
            <Picker.Item label="Latest" value="All" />
            <Picker.Item label="Bank Jobs" value="Banking" />
            <Picker.Item label="Railway Jobs" value="Railways" />
            <Picker.Item label="Engineering" value="Engineering" />
            <Picker.Item label="PSU" value="PSU" />
            <Picker.Item label="Civil Services" value="Civil Services" />
            <Picker.Item label="Other" value="Other" />
          </Picker>

          <Picker
            selectedValue={this.state.state}
            onValueChange={(itemValue, itemIndex) => this.setState({state: itemValue})}>
            <Picker.Item label="Your State" value="NA" />
            <Picker.Item label="All Over India" value="All" />
              <Picker.Item label="Andaman and Nicobar Islands" value="Andaman and Nicobar Islands" />
              <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
              <Picker.Item label="Arunachal Pradesh" value="Arunachal Pradesh" />
              <Picker.Item label="Assam" value="Assam" />
              <Picker.Item label="Bihar" value="Bihar" />
              <Picker.Item label="Chandigarh" value="Chandigarh" />
              <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
              <Picker.Item label="Dadra and Nagar Haveli" value="Dadra and Nagar Haveli" />
              <Picker.Item label="Daman and Diu " value="Daman and Diu " />
              <Picker.Item label="Delhi" value="Delhi" />
              <Picker.Item label="Goa" value="Goa" />
              <Picker.Item label="Gujarat" value="Gujarat" />
              <Picker.Item label="Haryana" value="Haryana" />
              <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
              <Picker.Item label="Jammu and Kashmir" value="Jammu and Kashmir" />
              <Picker.Item label="Jharkhand" value="Jharkhand" />
              <Picker.Item label="Karnataka" value="Karnataka" />
              <Picker.Item label="Kerala" value="Kerala" />
              <Picker.Item label="Lakshadweep" value="Lakshadweep" />
              <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
              <Picker.Item label="Maharashtra" value="Maharashtra" />
              <Picker.Item label="Manipur" value="Manipur" />
              <Picker.Item label="Meghalaya" value="Meghalaya" />
              <Picker.Item label="Mizoram" value="Mizoram" />
              <Picker.Item label="Nagaland" value="Nagaland" />
              <Picker.Item label="Odisha" value="Odisha" />
              <Picker.Item label="Puducherry" value="Puducherry" />
              <Picker.Item label="Punjab" value="Punjab" />
              <Picker.Item label="Rajasthan" value="Rajasthan" />
              <Picker.Item label="Sikkim" value="Sikkim" />
              <Picker.Item label="Telangana" value="Telangana" />
              <Picker.Item label="Tripura" value="Tripura" />
              <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
              <Picker.Item label="Uttarakhand" value="Uttarakhand" />
              <Picker.Item label="West Bengal" value="West Bengal" />
          </Picker>
        </View>
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
export default connect(mapStateToProps,mapDispatchToProps)(Search);
