import React from 'react';

import { SafeAreaView } from 'react-navigation'

import styles2 from './styles';
import LearnParent from '../components/Learn/LearnParent'

export default function HomeScreen() {
  return (
    <>

        <SafeAreaView style={styles2.learnScreen.safeAreaHeader} />
        <SafeAreaView style={styles2.learnScreen.backGroundContainer}>
            <LearnParent/>                        
        </SafeAreaView>
    </>
  );
}


HomeScreen.navigationOptions = {
  header: null,
};