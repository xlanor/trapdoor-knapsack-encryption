import React from 'react';
import { View } from 'react-native';

import { SafeAreaView } from 'react-navigation';

import styles from './styles';
import HomePageParent from '../components/HomePage/HomePageParent';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.homeScreen.backGroundContainer}>
      <View style={styles.homeScreen.backGroundContainer}>
        <HomePageParent />
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
