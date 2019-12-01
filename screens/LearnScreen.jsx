import React from 'react';
import {
  ScrollView, 
  View,
} from 'react-native';

import { SafeAreaView } from 'react-navigation'

import styles from './styles';
import LearnParent from '../components/Learn/LearnParent'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.learnScreen.backGroundContainer}>
          <LearnParent/>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};