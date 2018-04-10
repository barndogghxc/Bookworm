import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabNav from './TabNav.js';

const MainStackNav = StackNavigator(
  {
    Main: {
      screen: TabNav,
    },
  }
);

export default class MainNav extends React.Component {
  render() {
    return <MainStackNav/>;
  }
}