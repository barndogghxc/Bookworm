import React from 'react';
import style from './style';
import RootNavigator from './nav/RootNavigator';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator/>
    );
  }
}


