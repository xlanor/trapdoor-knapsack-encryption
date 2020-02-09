import React from 'react';
import { View } from 'react-native';

import { SafeAreaView } from 'react-navigation';

import styles from './styles';
import CreditsParent from '../components/Credits/CreditsParent';

export default function CreditsScreen() {
  return (
    <SafeAreaView style={styles.homeScreen.backGroundContainer}>
      <View style={styles.homeScreen.backGroundContainer}>
        <CreditsParent />
      </View>
    </SafeAreaView>
  );
}

CreditsScreen.navigationOptions = {
  header: null,
};
