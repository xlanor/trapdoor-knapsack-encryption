/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LearnScreen from '../screens/LearnScreen';
import ProgressScreen from '../screens/ProgressScreen';
import CreditsScreen from '../screens/CreditsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LearnScreen: { screen: LearnScreen },
    ProgressScreen: { screen: ProgressScreen },
    CreditsScreen: { screen: CreditsScreen },
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home Stack',
};

HomeStack.path = '';

export default HomeStack;
