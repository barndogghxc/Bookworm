import React from 'react';
import style from '../style.js';
import Home from '../views/Home.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Home/>
      </View>
    );
  }
}


