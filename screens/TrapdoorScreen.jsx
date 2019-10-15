import React from 'react';
import { View, Text } from 'react-native';

import GcdParent from '../components/GcdParent'

export default function TrapdoorScreen(){
  return (
    <View>
      <GcdParent/>
    </View>

  );
}

TrapdoorScreen.navigationOptions = {
  title: 'Trapdoor Knapsack Encryption'
};