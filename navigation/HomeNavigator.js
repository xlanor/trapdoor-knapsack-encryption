import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LearnScreen from '../screens/LearnScreen';
import ProgressScreen from '../screens/ProgressScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});



const HomeStack = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    LearnScreen: { screen: LearnScreen },
    ProgressScreen: { screen: ProgressScreen },
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home Stack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

HomeStack.path = '';



export default HomeStack;
