
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Share
} from 'react-native';
import styles from '@scenes/home/MainJobs.styles'
import {images} from '../../theme'

class JobCard extends Component{
  _shareData(){
    Share.share(
      {
        title: "New job advertise added",
        message: 'New job from '+ this.props.item.heading +' is added, for more info download app from '+'www.google.com',
        url:'www.google.com'
        // or
      },

    );
  }
  render(){
 //const item=this.props.item
  return(
  <TouchableOpacity style={styles.cardView} onPress={this.props.onPress}>
    <View style={{flexDirection:'row'}}>
      <View style={{flex:3.5}}>
    <Text style={styles.textHead}>
      {this.props.item.heading}
    </Text>
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
            {this.props.item.applyMode}
          </Text>
        </View>
        <View style={styles.toDate}>
          <Text style={styles.subHeadingText}>
          Total Post
          </Text>
          <Text style={styles.subText}>
          {this.props.item.totalPost}
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
             {this.props.item.fromDate}
          </Text>
        </View>
        <View style={styles.toDate}>
          <Text style={styles.subHeadingText}>
          To Date
          </Text>
          <Text style={styles.subText}>
         {this.props.item.toDate}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.footerIconView}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{this._shareData()}}>
      <Image source={images.likesActive} style={styles.imageIconLike}/>
      </TouchableOpacity>
      <Text>Likes</Text>


          {this.props.item.pdf===''?
          <TouchableOpacity onPress={this.props.gotoUrl}>
        <Image source={images.linkActive} style={styles.imageIcon}/>
      </TouchableOpacity>
        :
          <TouchableOpacity onPress={this.props.getPdf}>
      <Image source={images.iconPdf} style={styles.imagePdf}/>

        </TouchableOpacity>
      }
    </View>
    </View>
  </TouchableOpacity>
)
}

}

export default JobCard;
