import React from 'react';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Matches from '../pages/Matches';
import { TabNavigator } from 'react-navigation';

export default TabNavigator(
  {
    Home: {
      page: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
    Profile: {
      page: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    Matches: {
      page: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches',
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      style: {
        height: 100
      },
    }
  }
);