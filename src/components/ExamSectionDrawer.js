import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {images} from '../theme';
import styles from './ExamSectionDrawer.styles'
class ExamSectionDrawer extends Component{
  constructor(props){
    super(props);
    this.state={
      json:[{
        id:1,
      },{
        id:2
      },{
        id:3
      },{
        id:4
      },{
        id:5
      },{
        id:6
      },{
        id:7
      },{
        id:8
      },{
        id:9
      },{
        id:10
      },{
        id:11
      },{
        id:12
      },{
        id:13
      },{
        id:14
      },{
        id:15
      },{
        id:16
      },{
        id:17
      },{
        id:18
      },{
        id:19
      },{
        id:20
      },{
        id:21
      }
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <View>
        <View style={styles.aptiSection}>
          <Text style={styles.sectionHeaderText}>
            Aptitude
          </Text>
          <View style={styles.records}>
            {this.state.json.map(vac_Card=>{
              return(
                <View style={styles.singleQuesNum}>
                  <Text style={styles.numberText}>{vac_Card.id}</Text>
                </View>
              )
            })
          }
          </View>

        </View>
      
      </View>

      </View>

    );
  }
}
export default ExamSectionDrawer;
