import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Share
} from 'react-native';
import styles from '../screenStyles/CallAndAdmiCards.styles'
import {images} from '../../theme'
class NotifyRecord extends Component{
  constructor(props){
    super(props);
  }
  _shareData(){
    Share.share(
      {
        title: "New notification added",
        message:  this.props.data.notifyText +' is added, for more information download app from '+'www.google.com',
        url:'www.google.com'
        // or
      },

    );
  }

  _renderLinkOperations(){
    if(this.props.data.pdf==='' && this.props.data.url===''){
      return(
        null
      )

    }
    else if(this.props.data.pdf==='' && this.props.data.url!=''){
      return(
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>

          </View>
        <TouchableOpacity style={[styles.imageColumnContainer,{marginLeft:4}]} onPress={this.props.gotoUrl}>
            <Image source={images.linkActive} style={styles.imageIcon}/>
        </TouchableOpacity>
        <View style={styles.TextColumnContainer}>
        </View>
        <View style={styles.shareContainer}>
        </View>
      </View>


      )
    }
    else if(this.props.data.pdf!='' && this.props.data.url===''){
      return(
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>

          </View>
        <TouchableOpacity style={[styles.imageColumnContainer]} onPress={this.props.getPdf}>
              <Image source={images.iconPdf} style={styles.imagePdf}/>
        </TouchableOpacity>
        <View style={styles.TextColumnContainer}>
        </View>
        <View style={styles.shareContainer}>
        </View>
      </View>
      )
    }

    else {
      return(
        <View style={styles.rowContainer}>
          <View style={styles.imageColumnContainer}>

          </View>
        <TouchableOpacity style={[styles.imageColumnContainer,{marginLeft:4}]} onPress={this.props.getPdf}>
              <Image source={images.iconPdf} style={styles.imagePdf}/>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.imageColumnContainer,{marginLeft:8}]} onPress={this.props.gotoUrl}>
            <Image source={images.linkActive} style={styles.imageIcon}/>
        </TouchableOpacity>

        <View style={styles.TextColumnContainer}>
        </View>
        <View style={styles.shareContainer}>
        </View>
      </View>
      )
    }
  }
  render(){
    return(
      <View style={styles.cardContainer}>
        <View style={styles.rowContainer}>
        <View style={styles.imageColumnContainer}>
          <Image source={images.iconNotification} style={{height:32,width:32}}/>
        </View>
        <View style={styles.TextColumnContainer}>
          <Text style={styles.subText}>{this.props.data.notifyText} </Text>
          <Text style={styles.dateText}>Posted on:{this.props.data.notifyDate}</Text>
        </View>
        <TouchableOpacity style={styles.shareContainer} onPress={()=>{this._shareData()}}>
            <Image source={images.iconShare} style={{height:30,width:30}}/>
        </TouchableOpacity>
      </View>
        {this._renderLinkOperations()}
      </View>
    )
  }
}

export default NotifyRecord;
