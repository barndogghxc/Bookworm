import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { TabNavigator } from 'react-navigation';

export default TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches',
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 100
      },
    }
  }
);