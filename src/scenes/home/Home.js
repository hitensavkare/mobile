import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './Home.styles'
import {images} from '../../theme'
class Home extends Component{
  _gotoSearchScreen(){
    Actions.Search()
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity style={styles.rowContainer} onPress={()=>{Actions.MainJobs({title:'latest'})}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Latest Jobs</Text>
          <Text style={styles.subText}>Contains latest jobs.</Text>
      </View>
    </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer} onPress={()=>{Actions.MainJobs({title:'Banking'})}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Bank Jobs</Text>
          <Text style={styles.subText}>Contains bank jobs.</Text>
      </View>
    </TouchableOpacity>
        <TouchableOpacity  style={styles.rowContainer} onPress={()=>{Actions.MainJobs({title:'Railways'})}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.introTest} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
        <Text style={styles.textHeader}>Railway Jobs</Text>
          <Text style={styles.subText}>Contains railways jobs.</Text>
      </View>
    </TouchableOpacity>
        <TouchableOpacity style={styles.rowContainer} onPress={()=>{Actions.MainJobs({title:'Engineering'})}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Engineering Jobs</Text>
          <Text style={styles.subText}>Contains engineering jobs</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.rowContainer} onPress={()=>{Actions.MainJobs({title:'PSU'})}} >
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>PSU Jobs</Text>
          <Text style={styles.subText}>Contains PSU jobs</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.rowContainer}  onPress={()=>{Actions.MainJobs({title:'Civil Services'})}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Civil Services Jobs</Text>
          <Text style={styles.subText}>Contains civil services jobs</Text>
        </View>
      </TouchableOpacity>

        <TouchableOpacity style={styles.rowContainer} onPress={()=>{Actions.MainJobs({title:'other'})}}>
          <View style={styles.imageColumnContainer}>
            <Image source={images.iconPreviosePaper} style={{height:40,width:40}}/>
          </View>
          <View style={styles.TextColumnContainer}>
          <Text style={styles.textHeader}>Other Jobs</Text>
          <Text style={styles.subText}>Contains other jobs</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
      <View style={styles.float}>
        <TouchableOpacity style={styles.floatView} onPress={()=>{this._gotoSearchScreen()}}>

          <Text style={styles.subHeadingText}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

export default Home;
