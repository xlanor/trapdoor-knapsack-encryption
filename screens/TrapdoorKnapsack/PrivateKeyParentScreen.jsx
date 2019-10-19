import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PublicKeyParent from '../../components/TrapdoorKnapsack/GetPublicKey/PublicKeyParent'

export default function PrivateKeyParentScreen(){
  return (
    <View>
      {
        // This acts as the Parent class that will be responsible for holding all the states.
        // The states will then be passed as props via the navigation stack to the enxt screen
      }
      <PublicKeyParent/>
    </View>

  );
}

PrivateKeyParentScreen.navigationOptions = {
  title: 'Generate Public Key'
};