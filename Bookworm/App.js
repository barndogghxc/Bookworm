import React from 'react';
import style from './style.js';
import Home from './pages/Home.js';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Home/>
      </View>
    );
  }
}


