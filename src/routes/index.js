import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Home from '../scenes/home'
import Flash from '../scenes/flash'
import MainScreen from '../scenes'
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
     <Scene key="root">
       <Scene key='MainScreen'  hideNavBar component={MainScreen}/>
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
