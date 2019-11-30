import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';

import { MonoText } from '../components/StyledText';
import HomePageParent from '../components/HomePage/HomePageParent'

export default function HomeScreen() {
  return (
    <View style={styles.homeScreen.backGroundContainer}>
      <ScrollView
        style={styles.homeScreen.backGroundContainer}>
          <HomePageParent/>
          
      </ScrollView>

      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};