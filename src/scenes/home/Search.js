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

class Search extends Component{
  constructor(props){
    super(props);
    this.state={
      state:'',
      category:'',
    }
  }
  render(){
    return(
      <View style={styles.searchContainer}>
        <Statusbar/>
        <HeaderHome rightButton='Search' pageName='Search Jobs' onPress={()=>{Actions.pop()}}/>
        <View>
          <Picker
            selectedValue={this.state.question_category}
            onValueChange={(itemValue, itemIndex) => this.setState({question_category: itemValue})}>
            <Picker.Item label="Choose Job Category" value="NA" />
            <Picker.Item label="Latest" value="Sci & Tech" />
            <Picker.Item label="Bank Jobs" value="History" />
            <Picker.Item label="Railway Jobs" value="Geography" />
            <Picker.Item label="Engineering" value="Polity" />
            <Picker.Item label="National" value="National" />
            <Picker.Item label="International" value="International" />
            <Picker.Item label="GK" value="GK" />
              <Picker.Item label="Other" value="Other" />
          </Picker>

          <Picker
            selectedValue={this.state.question_category}
            onValueChange={(itemValue, itemIndex) => this.setState({question_category: itemValue})}>
            <Picker.Item label="Your State" value="NA" />
            <Picker.Item label="All Over India" value="Sci & Tech" />
            <Picker.Item label="Maharastra" value="Sci & Tech" />
            <Picker.Item label="Gujarat" value="History" />
              <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      </View>
    )
  }
}
export default Search;
