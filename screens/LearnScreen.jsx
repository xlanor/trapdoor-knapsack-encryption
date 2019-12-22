import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView, 
  View,
  Platform, StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-navigation'

import styles from './styles';
import LearnParent from '../components/Learn/LearnParent'
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
     
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <KeyboardAvoidingView style={{flex: 1}} behavior="height">
             {/* This is to pad the bottom for iphone X+ */}
            <SafeAreaView style={styles.learnScreen.safeAreaHeader} />
            <SafeAreaView style={styles.learnScreen.backGroundContainer}>
              
              <LearnParent/>
          </SafeAreaView>
      
      </KeyboardAvoidingView> 
    </TouchableWithoutFeedback>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};