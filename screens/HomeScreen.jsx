import React from 'react';
import {
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-navigation'

import styles from './styles';
import HomePageParent from '../components/HomePage/HomePageParent'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.homeScreen.backGroundContainer}>
      <ScrollView
        style={styles.homeScreen.backGroundContainer}>
          <HomePageParent/>
          
      </ScrollView>

      
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};