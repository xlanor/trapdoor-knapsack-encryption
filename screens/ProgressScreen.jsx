import React from 'react';

import { SafeAreaView } from 'react-navigation';

import styles2 from './styles';
import ProgressParent from '../components/Progress/ProgressParent';

export default function ProgressScreen() {
  return (
    <>
      <SafeAreaView style={styles2.progressScreen.backGroundContainer}>
        <ProgressParent />
      </SafeAreaView>
    </>
  );
}

ProgressScreen.navigationOptions = {
  header: null,
};
