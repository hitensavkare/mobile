import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './MainJobs.styles'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderHome from './HeaderHome'
//simple data for rendering
const vacData=[
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  },
  {
    id:5
  },
  {
    id:6
  }
]
class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'home',
    }
  //  alert(this.props.Text)
  }

  render(){
      return(
      <View style={styles.container}>
        <Statusbar/>
        <HeaderHome pageName='Jobs' onPress={()=>{Actions.pop()}}/>
        <ScrollView showsVerticalScrollIndicator={false}>
        {
          vacData.map(vac_Card=>{
            return(
              <TouchableOpacity style={styles.cardView} onPress={()=>{Actions.SubJobs()}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{flex:3.5}}>
                <Text style={styles.textHead}>SBI Recruitment 2018 – 8472 Junior Associates, Manager & Multiple Posts</Text>
              </View>
                <View style={{flex:0.5,justifyContent:'center'}}>
                  <Image source={images.bookmarmActive} style={{height:40,width:40}}/>
                </View>
            </View>
                  <View style={[styles.dateContainer,{marginTop:8}]}>
                    <View style={styles.fromDate}>
                      <Text style={styles.subHeadingText}>
                      Apply Mode
                      </Text>
                      <Text style={styles.subText}>
                  Online
                      </Text>
                    </View>
                    <View style={styles.toDate}>
                      <Text style={styles.subHeadingText}>
                      Total Post
                      </Text>
                      <Text style={styles.subText}>
                      8472
                      </Text>
                    </View>

                </View>
                  <View style={styles.impDateContainer}>
                      <Text style={styles.subHeadingText}> Important Dates</Text>
                  <View style={styles.dateContainer}>

                    <View style={styles.fromDate}>
                      <Text style={styles.subHeadingText}>
                        From Date
                      </Text>
                      <Text style={styles.subText}>
                    11-jan-2017
                      </Text>
                    </View>
                    <View style={styles.toDate}>
                      <Text style={styles.subHeadingText}>
                      To Date
                      </Text>
                      <Text style={styles.subText}>
                    11-jan-2017
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.footerIconView}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity>
                  <Image source={images.likesActive} style={styles.imageIconLike}/>
                  </TouchableOpacity>
                  <Text>Likes</Text>
                  <TouchableOpacity>
                    <Image source={images.linkActive} style={styles.imageIcon}/>
                    </TouchableOpacity>
                </View>


                </View>

              </TouchableOpacity>

            )
          })
        }
        </ScrollView>
        </View>
    )
  }
}

export default Home;
