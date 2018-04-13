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
import reducer from './redux/reducers'
const loggerMiddleware=createLogger({predicate:(getState,action)=>__DEV__})
function configureStore(initialState){
  const enhancer=compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer,initialState,enhancer);
}
const store=configureStore({});

class  JobSarthi extends Component{
  render(){
    return(
    <Provider store={store}>
    <AppRoute/>
  </Provider>
  )
  }
}
export default JobSarthi;
