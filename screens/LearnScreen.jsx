import React from 'react';
import {
  ScrollView, 
  View,
  Platform, StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-navigation'

import styles from './styles';
import LearnParent from '../components/Learn/LearnParent'

export default function HomeScreen() {
  return (
    <>
    {/* This is to pad the bottom for iphone X+ */}
    <SafeAreaView style={styles.learnScreen.safeAreaHeader} />
    <SafeAreaView style={styles.learnScreen.backGroundContainer}>
          <LearnParent/>
    </SafeAreaView>
    </>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};