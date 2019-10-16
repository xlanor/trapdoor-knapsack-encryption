import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import GcdParent from '../../components/TrapdoorKnapsack/PickNandM/GcdParent'

export default function GcdParentScreen(){
  return (
    <View>
      {
        // This acts as the Parent class that will be responsible for holding all the states.
        // The states will then be passed as props via the navigation stack to the enxt screen
      }
      <GcdParent/>
    </View>

  );
}

GcdParentScreen.navigationOptions = {
  title: 'Select N and M'
};