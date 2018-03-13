import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './SingleJob.styles'
import {images} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderHome from './HeaderHome'

class SingleJob extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Statusbar/>
        <HeaderHome pageName='Lower Division Clerk' onPress={()=>{Actions.pop()}}/>
        <View style={styles.subContainer}>
          <Image source={images.profileImage}  style={styles.vacancy_logo}/>
      </View>
      <ScrollView>
      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Organisation:
        </Text>
        <Text style={styles.textHead2}>
         Kolkata Municipal Service Commission
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Job Location:
        </Text>
        <Text style={styles.textHead2}>
         Kolkata,India
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Qualifications:
        </Text>
        <Text style={styles.textHead2}>
         Madhyamik Pass or equivalent. and Should have Knowledge in Computer Applications such as MS Office, Internet, etc. Computer typing speed of 30 wpm in English, knowledge of Bengali Computer typing.
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Age Limit:
        </Text>
        <Text style={styles.textHead2}>
        18 to 40 yrs.
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Application Fee:
        </Text>
        <Text style={styles.textHead2}>
          Application fee for U.R. & O.B.C. (A & B) candidates is Rs. 150=00 (Rupees One hundred and fifty) plus Processing Charges Rs. 50=00 (Rupees Fifty) plus Rs. 20=00 (Rupees Twenty) towards Bank Charges for Challan deposit. For S.C., S.T. & P.H. candidates only Processing Charges Rs. 50=00 (Rupees Fifty) plus Rs. 20=00 (Rupees Twenty) towards Bank Charges for Challan deposit.
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Selection Procedure:
        </Text>
        <Text style={styles.textHead2}>
        Selection will be done on the basis of candidates’ performance in the written Test and Personal Interview.
        </Text>
      </View>


      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          Pay Scale:
        </Text>
        <Text style={styles.textHead2}>
         Rs. 5,400 – Rs. 25,200/- Per Month.
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
        Apply Mode:
        </Text>
        <Text style={styles.textHead2}>
        Online
        </Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.textHead}>
          How to Apply:
        </Text>
        <Text style={styles.textHead2}>
      Interested and Eligible Candidates may Apply Online though website<Text style={styles.link}  onPress={() => Linking.openURL('http://www.mscwb.org')}> www.mscwb.org</Text> on or before 16.04.2018
        </Text>
      </View>
    </ScrollView>

      </View>
    )
  }
}
export default SingleJob;
