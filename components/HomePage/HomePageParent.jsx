/* eslint-disable react/prop-types */
/* eslint-disable prefer-const */
import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import { Button as RneButton, Icon } from 'react-native-elements';

// redux actions
import { COUNTER_CHANGE } from '../../redux-modules/constants';

// importing image assets
import credits from '../../assets/images/credits.png';
import lightbulb from '../../assets/images/lightbulb.png';
import progress from '../../assets/images/progress.png';

import styles from './styles';

class HomePageParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedText: 'TrapLearn',
      optionChosen: false,
      selectedOption: null,
    };
  }

  updateIconPressed = keyName => {
    const newKey =
      keyName === 'creditsIcon'
        ? 'Credits'
        : keyName === 'lightBulbIcon'
        ? 'Tutorial & Simulator'
        : keyName === 'progressIcon'
        ? 'Progress'
        : 'TrapLearn';
    const selectedOption =
      keyName === 'creditsIcon' ? 1 : keyName === 'lightBulbIcon' ? 2 : keyName === 'progressIcon' ? 3 : null;
    this.setState({
      selectedText: newKey,
      optionChosen: true,
      selectedOption,
    });
  };

  navigateScreen = newScreen => {
    const { navigation } = this.props;
    switch (newScreen) {
      case 1:
        navigation.navigate('CreditsScreen');
        break;
      case 2:
        navigation.navigate('LearnScreen');
        break;
      case 3:
        navigation.navigate('ProgressScreen');
        break;
      default:
        break;
    }
  };

  decrementCount() {
    let { count, onChangeCount } = this.props;
    count -= 1;
    onChangeCount(count);
  }

  incrementCount() {
    let { count, onChangeCount } = this.props;
    count += 1;
    onChangeCount(count);
  }

  render() {
    const { selectedText, optionChosen, selectedOption } = this.state;
    const { version } = Constants.manifest;
    return (
      <View style={styles.homePageParent.wrapHomePage}>
        <View
          style={optionChosen ? { ...styles.homePageParent.iconsViewSelected } : { ...styles.homePageParent.iconsView }}
        >
          <TouchableOpacity
            onPress={() => {
              this.updateIconPressed('creditsIcon');
            }}
          >
            <Image key="creditsIcon" style={styles.homePageParent.imageStyle} source={credits} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.updateIconPressed('lightBulbIcon');
            }}
          >
            <Image key="lightBulbIcon" style={styles.homePageParent.imageStyle} source={lightbulb} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.updateIconPressed('progressIcon');
            }}
          >
            <Image key="progressIcon" style={styles.homePageParent.imageStyle} source={progress} />
          </TouchableOpacity>
        </View>

        <View style={styles.homePageParent.textWrapperStyle}>
          <Text style={styles.homePageParent.textBox}>{selectedText}</Text>

          {optionChosen ? (
            <RneButton
              //
              icon={<Icon name="ios-arrow-dropright-circle" type="ionicon" size={100} color="red" />}
              title=""
              type="clear"
              onPress={() => {
                this.navigateScreen(selectedOption);
              }}
              buttonStyle={{
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
              }}
            />
          ) : null}
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.homePageParent.textBoxVersion}>{`v${version}`}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => ({
  onChangeCount: count => {
    dispatch({
      type: COUNTER_CHANGE,
      payload: count,
    });
  },
  dispatch,
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(HomePageParent));
