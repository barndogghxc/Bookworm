import React from 'react';
import style from './style.js';
import Home from './views/Home.js';
import { 
  Text, 
  View 
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Home/>
      </View>
    );
  }
}


