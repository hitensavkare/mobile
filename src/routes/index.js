import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Home from '../scenes/home'
import MainJobs from '../scenes/home/MainJobs'
import SubJobs from '../scenes/home/SubJobs'
import Search from '../scenes/home/Search'
import SingleJob from '../scenes/home/SingleJob'
import Flash from '../scenes/flash'
import Intro from '../scenes/introduction'
import MainScreen from '../scenes'
import Login from '../scenes/loginRegister'
import Register from '../scenes/loginRegister/Register'
import Comments from '../scenes/discuss/Comments'
import Question from '../scenes/discuss/Question'
import TestList from '../scenes/test/TestList'
import MainTest from '../scenes/test/MainTest'
class AppRoute extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    };
  }
  componentWillMount(){
    setTimeout(()=>{
      this.setState({isLoading:false})
    },3000);
  }

  _introScreen(){
    return(
     <Scene key="root"
       hideNavBar="hideNavBar"
     hideTabBar="hideTabBar"
       >
          <Scene key='Intro' title='Intro' initial  component={Intro}/>
          <Scene key='MainScreen' title='JobSarthi'   component={MainScreen}/>
          <Scene key='Login' component={Login}/>
          <Scene key='Comments' component={Comments}/>
          <Scene key='Register' component={Register}/>
          <Scene key='Question' component={Question}/>
          <Scene key='SubJobs' component={SubJobs}/>
          <Scene key='SingleJob' component={SingleJob}/>
          <Scene key='MainJobs' component={MainJobs}/>
          <Scene key='Search' component={Search}/>
          <Scene key='TestList' component={TestList}/>
          <Scene key='MainTest' component={MainTest}/>
     </Scene>
   )
  }

  render(){
    if(this.state.isLoading===true){
      return(<Flash/>);
    }
    else{
      return(
        <Router>
          {this._introScreen()}
        </Router>
      )
    }
  }
}
export default AppRoute;
