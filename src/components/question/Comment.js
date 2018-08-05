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
import Loader from '@components/Loader'
class Comments extends Component{
  constructor(props){
    super(props);
    this.state={
      loading:false,
      isCommentVisible:false,
      silverCoins:this.props.data.silverCount,
      bronzeCoins:this.props.data.bronzeCount,
      reports:this.props.data.spamCount,
      commentorId:this.props.data.regId,
      commentId:this.props.data._id,
      appUserId:this.props._id
    }
  }
  //function timeout for internet connection
   timeout(ms, promise) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error("timeout"))
      }, ms)
      promise.then(resolve, reject)
    })
  }
  addSilver=()=>{
    Alert.alert(
      'Give Silver Reward',
      'Once reward is given then it will be not taken back.',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () =>{

          const data={action:'insert',userId:this.props._id,commentor:this.state.commentorId,
          commentId:this.state.commentId,type:'silver',silver:parseInt(this.state.silverCoins)+1,
        bronze:this.state.bronzeCoins,report:this.state.reports}
          //  alert(this.props._id)
          if(this.props._id===null || this.props._id===undefined){
            alert(this.props._id===null || this.state._id===undefined)
          }
          else{
            if(this.props._id===this.state.commentorId){
              alert('Sorry you cannot give reward to your own')
            }
            else{
              this.setState({loading:true})
             this.props.giveRewardOrReport(data).then(()=>{
                //count=parseInt(this.state.silverCoins)+1
                this.setState({silverCoins:this.props.silver,loading:false})
              })
            }
          }
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
          const data={action:'insert',userId:this.props._id,commentor:this.state.commentorId,commentId:this.state.commentId
          ,type:'bronze',bronze:parseInt(this.state.bronzeCoins)+1,silver:this.state.silverCoins,report:this.state.reports}
          //  alert(this.props._id)
          if(this.props._id===null || this.props._id===undefined){
            alert(this.props._id===null || this.state._id===undefined)
          }
          else{
            if(this.props._id===this.state.commentorId){
              alert('Sorry you cannot give reward to your own')
            }
            else{
              this.setState({loading:true})
             this.props.giveRewardOrReport(data).then(()=>{
                //count=parseInt(this.state.silverCoins)+1
                this.setState({bronzeCoins:this.props.bronze,loading:false})
              }).catch((error)=>{
                alert(error)
              })
            }
          }
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
          const data={action:'insert',userId:this.props._id,commentor:this.state.commentorId,commentId:this.state.commentId
          ,type:'report',bronze:this.state.bronzeCoins,silver:this.state.silverCoins,report:parseInt(this.state.reports)+1}
          //  alert(this.props._id)
          if(this.props._id===null || this.props._id===undefined){
            alert(this.props._id===null || this.state._id===undefined)
          }
          else{
            if(this.props._id===this.state.commentorId){
              alert('Sorry you cannot give reward/report to your own')
            }
            else{
              this.setState({loading:true})
             this.props.giveRewardOrReport(data).then(()=>{
                //count=parseInt(this.state.silverCoins)+1
                this.setState({reports:this.props.reports,loading:false})
              }).catch((error)=>{
                alert(error)
              })
            }
          }
        }},
      ],
      { cancelable: false }
    )
  }

  _renderAccepted(shwoFlag,isAccepted){
    //alert(this.props.isAcceptedFlag)
    if(shwoFlag==='true'){
      return(
        <TouchableOpacity style={styles.rewardTouch} onPress={()=>{this._acceptAnswer()}}>
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
//here you can accept the anser
_acceptAnswer(){
  Alert.alert(
    'Accept Answer Confirmation',
    'Are you sure want to accept this answer?',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () =>{
        const data={userId:this.props._id,commentor:this.state.commentorId,commentId:this.state.commentId,
        points:this.props.data.points,commentId:this.state.commentId,questionId:this.props._questionId}
        //  alert(this.props._  id)
        if(this.props._id===null || this.props._id===undefined){
          alert(this.props._id===null || this.state._id===undefined)
        }
        else{
          if(this.props._id===this.state.commentorId){
            alert('Sorry you cannot give reward to your own')
          }
          else{
            this.setState({loading:true})
           this.props.acceptAnswer(data).then(()=>{
              //count=parseInt(this.state.silverCoins)+1
              this.setState({loading:false})
            }).catch((error)=>{
              alert(error)
            })
          }
        }
      }},
    ],
    { cancelable: false }
  )
}
  render(){

    let data=this.props.data;
    const {appUserId}=this.state;
    return(
      <View style={styles.commentContainer}>
        <Loader
           loading={this.state.loading} />
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
          {data.regId===appUserId?null:
          <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
            {this._renderAccepted(this.props.data.shwoFlag,this.props.data.isAccepted)}
          </View>
          }
          {data.regId===appUserId?
            null:
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={this.addSilver}  style={styles.rewardTouch}><Image source={images.iconSilver} style={styles.rewardIcon}/>
              <Text>{this.state.silverCoins}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.setBronze} style={styles.rewardTouch}><Image source={images.iconBronz} style={styles.rewardIcon}/>
            <Text>{this.state.bronzeCoins}</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.setReport} style={styles.rewardTouch}><Image source={images.iconSpam} style={styles.rewardIcon}/>
            <Text>{this.state.reports}</Text></TouchableOpacity>
          </View>
          }

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
    bronze:state.discussReducer.bronze,
    silver:state.discussReducer.silver,
    reports:state.discussReducer.report
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
