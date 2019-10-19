import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PrivateKeyParent from '../../components/TrapdoorKnapsack/PickPrivateKey/PrivateKeyParent'

export default function PublicKeyParentScreen(){
  return (
    <View>
      {
        // This acts as the Parent class that will be responsible for holding all the states.
        // The states will then be passed as props via the navigation stack to the enxt screen
      }
      <PrivateKeyParent/>
    </View>

  );
}

PublicKeyParentScreen.navigationOptions = {
  title: 'Select Private Key'
};