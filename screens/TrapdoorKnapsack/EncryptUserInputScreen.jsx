import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import EncryptUserInput from '../../components/TrapdoorKnapsack/EncryptUserInput/EncryptUserInput'

export default function EncryptUserInputScreen(){
  return (
    <View>
      {
        // This acts as the Parent class that will be responsible for holding all the states.
        // The states will then be passed as props via the navigation stack to the enxt screen
      }
      <EncryptUserInput/>
    </View>

  );
}

EncryptUserInputScreen.navigationOptions = {
  title: 'Encrypt User Input'
};