import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundaryDecrypt from './components/Common/ErrorBoundaryDecrypt';

import AppNavigator from './navigation/AppNavigator';
import UpdateQuestions from './components/UpdateQuestions';
import SplashScreen from './screens/SplashScreen';

import { getStore, getPersistor } from './redux-modules/store/configureStore';

export default function App(props) {
  renderLoading = () => {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  };
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [isSplash, setSplash] = useState(true);

  const myStore = getStore();
  const myPersistor = getPersistor();
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor} loading={null}>
          <AppLoading
            startAsync={loadResourcesAsync}
            onError={handleLoadingError}
            onFinish={() => handleFinishLoading(setLoadingComplete)}
          />
        </PersistGate>
      </Provider>
    );
  }
  return (
    <Provider store={myStore}>
      <PersistGate persistor={myPersistor} loading={null}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <UpdateQuestions />
          <ErrorBoundaryDecrypt>
            <SplashScreen />
          </ErrorBoundaryDecrypt>
        </View>
      </PersistGate>
    </Provider>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([require('./assets/images/robot-dev.png'), require('./assets/images/robot-prod.png')]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      comfortaa: require('./assets/fonts/ProximaNova-Regular.ttf'),
      'comfortaa-bold': require('./assets/fonts/ProximaNova-Bold.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
