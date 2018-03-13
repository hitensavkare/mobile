import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {connect,Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import AppRoute from './routes';
import {persistStore,persistReducer} from 'redux-persist';
import reducer from './redux/reducers'

const loggerMiddleware=createLogger({predicate:(getState,action)=>__DEV__})
const persistConfig={
  key:'root',
  storage:AsyncStorage,
}

class  JobSarthi extends Component{
  render(){
    return(
    <AppRoute/>
  )
  }
}
export default JobSarthi;
