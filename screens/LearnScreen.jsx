import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView, 
  View,
  Platform, StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-navigation'

import styles from './styles';
import LearnParent from '../components/Learn/LearnParent'

export default function HomeScreen() {
  return (
     
          <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
             {/* This is to pad the bottom for iphone X+ */}
        <SafeAreaView style={styles.learnScreen.safeAreaHeader} />
        <SafeAreaView style={styles.learnScreen.backGroundContainer}>
              <LearnParent/>
        </SafeAreaView>
      
        </KeyboardAvoidingView> 
  );
}

HomeScreen.navigationOptions = {
  header: null,
};