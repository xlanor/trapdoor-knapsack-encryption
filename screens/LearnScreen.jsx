import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Text,
  StyleSheet,
  ScrollView, 
  View,
  Dimensions,
  Platform, StatusBar
} from 'react-native';

import { SafeAreaView } from 'react-navigation'
import { getStatusBarHeight } from 'react-native-status-bar-height';

import styles2 from './styles';
import LearnParent from '../components/Learn/LearnParent'
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
     <>


        <SafeAreaView style={styles2.learnScreen.safeAreaHeader} />
        {/*<KeyboardAvoidingView style={{flex: 1}} behavior="height">*/}
            <SafeAreaView style={styles2.learnScreen.backGroundContainer}>
                <LearnParent/>
                         
            </SafeAreaView>
        {/*</KeyboardAvoidingView> */}
             {/* This is to pad the bottom for iphone X+ 

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.learnScreen.safeAreaHeader} />
            <SafeAreaView style={styles.learnScreen.backGroundContainer}>
              <LearnParent/>
          </SafeAreaView>
                <Text style={styles.header}>
                    Header
                </Text>
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confrim Password"
                    style={styles.input}
                />
                <View style={styles.btnContainer}>
                    <Button title="Submit" onPress={() => null} />
                </View>
            </View>
      */} 
      
</>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  inner: {
      padding: 10,
      flex: 1,
      justifyContent: "flex-end",
  },
  header: {
      fontSize: 36,
      marginBottom: 48,
  },
  input: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      marginBottom: 36,
  },
  btnContainer: {
      backgroundColor: "white",
      marginTop: 12,
  },
});


HomeScreen.navigationOptions = {
  header: null,
};