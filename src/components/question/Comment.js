import React, { Component } from 'react';
import {colors} from '../../theme'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'
import {Header} from 'native-base';
import {images} from '../../theme'
import styles from '../screenStyles/Question.style'
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from  'redux';
import {ActionCreators} from '../../redux/actions';
import {connect} from 'react-redux';

class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      isCommentVisible:false,
      silverCoins:this.props.data.silverCount,
      bronzeCoins:this.props.data.bronzeCount,
      reports:this.props.data.spamCount,
      commentorId:this.props.data.regId,
      commentId:this.props.data._id
    }
  }
  addSilver=()=>{
    Alert.alert(
      'Give Silver Reward',
      'Once reward is given then it will be not taken back.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>{

          const data={action:'insert',userId:this.props._id,commentor:this.state.commentorId,commentId:this.state.commentId,type:'silver'}
          //  alert(this.props._id)
          if(this.props._id===null || this.props._id===undefined){
            alert(this.props._id===null || this.state._id===undefined)
          }
          else{
            if(this.props._id===this.state.commentorId){
              alert('Sorry you cannot give reward to your own')
            }
            else{
              this.props.giveRewardOrReport(data).then(()=>{
                count=parseInt(this.state.silverCoins)+1
                this.setState({silverCoins:count})
              })
            }
          }
          //this.props.setSilver(this.state.silverCoins,this.state.commentorId,this.state.commentId)
        }},
      ],
      { cancelable: false }
    )
  }
  setBronze=()=>{
    Alert.alert(
      'Give Bronze Reward',
      'Once reward is given then it will be not taken back.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>{

          count=parseInt(this.state.bronzeCoins)+1
          this.setState({bronzeCoins:count})
          this.props.getBronze(this.state.bronzeCoins,this.state.commentorId,this.state.commentId)
        }},
      ],
      { cancelable: false }
    )
  }
  setReport=()=>{
    Alert.alert(
      'Spammy comment',
      'Please report only if it is not related to Knowledge.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>{
          count=parseInt(this.state.reports)+1
          this.setState({reports:count})
          this.props.getSpam(this.state.reports,this.state.commentorId,this.state.commentId)
        }},
      ],
      { cancelable: false }
    )
  }

  _renderAccepted(shwoFlag,isAccepted){
    //alert(this.props.isAcceptedFlag)
    if(shwoFlag==='true' && this.props.isAcceptedFlag==='false'){
      return(
        <TouchableOpacity style={styles.rewardTouch}>
          <Image source={images.iconTick} style={styles.rewardIcon}/>
          <Text>Accept</Text>
        </TouchableOpacity>
      )
    }
    else
    {
      return(null)
    }
  }

  render(){

    let data=this.props.data;
    return(
      <View style={styles.commentContainer}>
        <View style={styles.commentCard}>
          <View style={styles.commentSection}>
            <View style={styles.commentImgContainer}>
              {data.url==="" || data.url===null?
              <Image source={images.profileImage} style={styles.commentProfileImg}/>
              :<Image source={{uri:data.url}} style={styles.commentProfileImg}/>
            }
          </View>
          <View style={styles.commentText}>
            <Text style={styles.profileText}>
              {data.name}
            </Text>
            <Text style={styles.comment}>
              {data.comment}
            </Text>
          </View>
        </View>
        <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginRight:8}}>
          <Text style={styles.dateText}>Teached on:{data.postedOn}</Text>
        </View>
        <View style={styles.bedgeContainer}>
          <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
            {this._renderAccepted(this.props.data.shwoFlag,this.props.data.isAccepted)}


          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={this.addSilver}  style={styles.rewardTouch}><Image source={images.iconSilver} style={styles.rewardIcon}/>
            <Text>{this.state.silverCoins}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.setBronze} style={styles.rewardTouch}><Image source={images.iconBronz} style={styles.rewardIcon}/>
          <Text>{this.state.bronzeCoins}</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.setReport} style={styles.rewardTouch}><Image source={images.iconSpam} style={styles.rewardIcon}/>
          <Text>{this.state.reports}</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  </View>

)
}
}
const mapStateToProps=state=>{
  return{
    commentData:state.discussReducer.commentData,
    isAccepted:state.discussReducer.isAccepted,
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
