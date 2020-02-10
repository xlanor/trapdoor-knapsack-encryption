import React from 'react';
import { Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { DotIndicator } from 'react-native-indicators';
import * as Animatable from 'react-native-animatable';
import styles2 from './styles';
import Book from '../assets/images/Book.png';

import AppNavigator from '../navigation/AppNavigator';

const width = Dimensions.get('screen').width * 0.5;
const height = (width / 1725) * 2012;

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
    };
  }

  componentDidMount() {
    this.setState(
      {
        showSpinner: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            showSpinner: false,
          });
        }, 3000);
      },
    );
  }

  render() {
    const { showSpinner } = this.state;
    return (
      <>
        <SafeAreaView style={styles2.progressScreen.backGroundContainer}>
          {showSpinner ? (
            <Animatable.View
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
              animation="fadeOut"
              duration={3000}
            >
              <Image style={{ width, height }} source={Book} />
              <DotIndicator
                style={{
                  flex: 0.2,
                }}
                size={10}
              />
            </Animatable.View>
          ) : (
            <AppNavigator />
          )}
        </SafeAreaView>
      </>
    );
  }
}
