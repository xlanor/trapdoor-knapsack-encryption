import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GcdParentScreen from '../screens/TrapdoorKnapsack/GcdParentScreen';
import PublicKeyParentScreen from '../screens/TrapdoorKnapsack/PublicKeyParentScreen';
import PrivateKeyParentScreen from '../screens/TrapdoorKnapsack/PrivateKeyParentScreen';
import EncryptUserInputScreen from '../screens/TrapdoorKnapsack/EncryptUserInputScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const TrapdoorStack = createStackNavigator(
    {
      SelectNandM: { screen: GcdParentScreen },
      SelectPublicKey: { screen: PublicKeyParentScreen },
      SelectPrivateKey: { screen: PrivateKeyParentScreen },
      EncryptText: { screen: EncryptUserInputScreen },
    },
    config
);

TrapdoorStack.navigationOptions = {
  tabBarLabel: 'Trapdoor Knapsack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

TrapdoorStack.path = '';



export default TrapdoorStack;
