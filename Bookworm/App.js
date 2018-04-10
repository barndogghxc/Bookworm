import React from 'react';
import style from './style';
import Home from './pages/Home';
import MainNav from './nav/mainNav';
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


