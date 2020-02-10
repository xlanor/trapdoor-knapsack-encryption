import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';

import { Card, Button as RneButton, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { introPageOne, gcdPageOne, keyPageOne, EncryptTutorial, DecryptTutorial, SimulatorPage } from './content';

import BottomPopUp from '../Common/BottomPopUp';

import {
  NEXT_INTRO_PAGE_ACTION,
  PREVIOUS_INTRO_PAGE_ACTION,
  NEXT_GCD_PAGE_ACTION,
  PREVIOUS_GCD_PAGE_ACTION,
  NEXT_KEY_PAGE_ACTION,
  PREVIOUS_KEY_PAGE_ACTION,
  NEXT_ENCRYPT_PAGE_ACTION,
  NEXT_DECRYPT_PAGE_ACTION,
  PREVIOUS_DECRYPT_PAGE_ACTION,
  PREVIOUS_ENCRYPT_PAGE_ACTION,
  RESET_PAGE_ACTION,
  CHANGE_TAB_ACTION,
} from '../../redux-modules/actions/tabPage';

// importing redux defined actions
import {
  INTRO_SELECT_ACTION,
  INTRO_LOCK_ACTION,
  INTRO_UNLOCK_ACTION,
  ALGO_SELECT_ACTION,
  ALGO_LOCK_ACTION,
  ALGO_UNLOCK_ACTION,
  KEY_SELECT_ACTION,
  KEY_LOCK_ACTION,
  KEY_UNLOCK_ACTION,
  DECRYPT_SELECT_ACTION,
  DECRYPT_LOCK_ACTION,
  DECRYPT_UNLOCK_ACTION,
  ENCRYPT_SELECT_ACTION,
  ENCRYPT_LOCK_ACTION,
  ENCRYPT_UNLOCK_ACTION,
  KNAPSACK_SELECT_ACTION,
  KNAPSACK_LOCK_ACTION,
  KNAPSACK_UNLOCK_ACTION,
  UNLOCK_ALL_ACTION,
} from '../../redux-modules/actions/learnPageLock';

import {
  UPDATE_ENCRYPTION_PADDING_ACTION,
  UPDATE_ENCRYPTION_BLOCKS_ACTION,
  UPDATE_ENCRYPTED_STRING_ACTION,
} from '../../redux-modules/actions/updateEncryption';

import {
  UPDATE_INVERSE_ACTION,
  UPDATE_PUBLIC_KEY_STRING_ACTION,
  UPDATE_PUBLIC_KEY_ARRAY_ACTION,
} from '../../redux-modules/actions/updateParameters';

import { HIDE_TROPHY_ACTION } from '../../redux-modules/actions/manageTrophies';

// importing image assets
// unlocked
import Unlock from '../../assets/images/unlock.png';

// import stylesheet.
import styles from './styles';

// we will use ONE tab that will contain state
class LearnTab extends Component {
  getNextTab = () => {
    // to be defined  - hardcoded.
    // from current name, get next possible name.
    // if not, return none.
    const { actions, tabName } = this.props;
    const currentTab = tabName;
    let isFound = false;
    switch (currentTab) {
      case 'intro':
        isFound = true;
        break;
      case 'gcd':
        isFound = true;
        break;
      case 'key':
        isFound = true;
        break;
      case 'encrypt':
        isFound = true;
        break;
      default:
        break;
    }

    if (!isFound) return null;

    // return a button. to be designed.
    return (
      <TouchableOpacity
        onPress={() => {
          switch (currentTab) {
            case 'intro':
              return actions.ALGO_UNLOCK_ACTION();
            case 'gcd':
              return actions.KEY_UNLOCK_ACTION();
            case 'key':
              return actions.ENCRYPT_UNLOCK_ACTION();
            case 'encrypt':
              return actions.DECRYPT_UNLOCK_ACTION();
            default:
              return null;
          }
        }}
      >
        <Image source={Unlock} style={{ height: 40, width: 40 }} />
      </TouchableOpacity>
    );
  };

  canNavigate = () => {
    const { allowNextPage } = this.props;
    const isUnlockable = allowNextPage;
    return !!isUnlockable; // redundant true/false but to be a little more explicit
  };

  getTouchablePreviousAction = () => {
    const { actions, tabName, tabPage } = this.props;
    const currentTab = tabName;
    const currentPage = tabPage;
    switch (currentTab) {
      case 'intro':
        return actions.PREVIOUS_INTRO_PAGE_ACTION();
      case 'gcd':
        return actions.PREVIOUS_GCD_PAGE_ACTION();
      case 'key':
        if (currentPage === 4) {
          actions.UPDATE_INVERSE_ACTION(0);
          return actions.PREVIOUS_KEY_PAGE_ACTION();
        }
        if (currentPage === 5) {
          actions.UPDATE_PUBLIC_KEY_ARRAY_ACTION([]);
          actions.UPDATE_PUBLIC_KEY_STRING_ACTION('');
          return actions.PREVIOUS_KEY_PAGE_ACTION();
        }

        return actions.PREVIOUS_KEY_PAGE_ACTION();

      case 'encrypt':
        if (currentPage === 2) {
          // reset
          actions.UPDATE_ENCRYPTION_PADDING_ACTION(0);
          actions.UPDATE_ENCRYPTION_BLOCKS_ACTION([]);
          actions.UPDATE_ENCRYPTED_STRING_ACTION([]);
          return actions.PREVIOUS_ENCRYPT_PAGE_ACTION();
        }
        return actions.PREVIOUS_ENCRYPT_PAGE_ACTION();

      case 'decrypt':
        return actions.PREVIOUS_DECRYPT_PAGE_ACTION();
      default:
        return actions.PREVIOUS_INTRO_PAGE_ACTION();
    }
  };

  getTouchableNextAction = () => {
    const { actions, tabName, tabPage } = this.props;
    const currentTab = tabName;
    const currentPage = tabPage;
    switch (currentTab) {
      case 'intro':
        return actions.NEXT_INTRO_PAGE_ACTION();
      case 'gcd':
        return actions.NEXT_GCD_PAGE_ACTION();
      case 'key':
        return actions.NEXT_KEY_PAGE_ACTION();
      case 'encrypt':
        if (currentPage === 1) {
          // reset
          actions.UPDATE_ENCRYPTION_PADDING_ACTION(0);
          actions.UPDATE_ENCRYPTION_BLOCKS_ACTION([]);
          actions.UPDATE_ENCRYPTED_STRING_ACTION([]);
          return actions.NEXT_ENCRYPT_PAGE_ACTION();
        }
        return actions.NEXT_ENCRYPT_PAGE_ACTION();
      case 'decrypt':
        return actions.NEXT_DECRYPT_PAGE_ACTION();
      default:
        return actions.NEXT_INTRO_PAGE_ACTION();
    }
  };

  isFinalPage = () => {
    const { tabPage, tabName, maxPage } = this.props;
    const currentTab = tabName;
    console.log(`Current tab ${currentTab} Max page ${maxPage} CurrentPage: ${tabPage}`);
    return tabPage >= maxPage;
  };

  isFirstPage = () => {
    const { tabPage } = this.props;
    return tabPage <= 1;
  };

  getContent = () => {
    // loads the static pages...
    const { tabName, tabPage } = this.props;
    const currentTab = tabName;
    const currentPage = tabPage;
    console.log(`Getting content for ${currentTab} : ${currentPage}`);
    switch (currentTab) {
      case 'intro':
        switch (currentPage) {
          case 1:
            return introPageOne;
          default:
            return introPageOne;
        }
      case 'gcd':
        switch (currentPage) {
          case 1:
            return gcdPageOne;
          default:
            return gcdPageOne;
        }
      case 'key':
        switch (currentPage) {
          case 1:
            return keyPageOne;
          default:
            return keyPageOne;
        }
      case 'encrypt':
        switch (currentPage) {
          case 1:
            return EncryptTutorial;
          default:
            return EncryptTutorial;
        }
      case 'decrypt':
        switch (currentPage) {
          case 1:
            return DecryptTutorial;
          default:
            return DecryptTutorial;
        }
      case 'simulator':
        switch (currentPage) {
          case 1:
            return SimulatorPage;
          default:
            return SimulatorPage;
        }
      default:
        return null;
    }
  };

  loadPage = () => {
    const CurPage = this.getContent();
    // for dynamic pages, we render component, while for static
    // we render a page.
    return (
      <Card containerStyle={{ maxHeight: '95%', height: '95%' }}>
        <CurPage />
      </Card>
    );
  };

  // eslint-disable-next-line no-unused-vars
  hideTrophyAnimation = _endState => {
    const { actions } = this.props;
    setTimeout(() => {
      actions.HIDE_TROPHY_ACTION();
    }, 3000);
  };

  render() {
    const { showTrophy } = this.props;
    return (
      <>
        <View style={{ flex: 5.5 }}>{this.loadPage()}</View>
        <View style={{ flex: 0.5 }}>
          {showTrophy ? (
            <BottomPopUp
              hideTrophyAnimation={endState => {
                this.hideTrophyAnimation(endState);
              }}
            />
          ) : (
            <View style={{ ...styles.learnTab.bottom }}>
              <View style={{ flex: 1 }}>
                {this.isFirstPage() ? null : (
                  <RneButton
                    icon={<Icon name="arrow-bold-left" type="entypo" size={Dimensions.get('window').width * 0.1} />}
                    title=""
                    type="clear"
                    onPress={() => {
                      this.getTouchablePreviousAction();
                    }}
                    buttonStyle={{
                      paddingTop: 0,
                      paddingBottom: 0,
                      marginTop: 0,
                    }}
                  />
                )}
              </View>
              <View style={{ flex: 4 }} />
              <View style={{ flex: 1 }}>
                <View style={{ marginLeft: 'auto' }}>
                  {this.isFinalPage() ? null : this.canNavigate() ? (
                    <RneButton
                      icon={<Icon name="arrow-bold-right" type="entypo" size={Dimensions.get('window').width * 0.1} />}
                      title=""
                      type="clear"
                      onPress={() => {
                        this.getTouchableNextAction();
                      }}
                      buttonStyle={{
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginTop: 0,
                      }}
                    />
                  ) : null}
                </View>
              </View>
            </View>
          )}
        </View>
      </>
    );
  }
}

LearnTab.propTypes = {
  actions: PropTypes.shape({
    NEXT_INTRO_PAGE_ACTION: PropTypes.func,
    PREVIOUS_INTRO_PAGE_ACTION: PropTypes.func,
    NEXT_GCD_PAGE_ACTION: PropTypes.func,
    PREVIOUS_GCD_PAGE_ACTION: PropTypes.func,
    NEXT_ENCRYPT_PAGE_ACTION: PropTypes.func,
    NEXT_DECRYPT_PAGE_ACTION: PropTypes.func,
    PREVIOUS_DECRYPT_PAGE_ACTION: PropTypes.func,
    PREVIOUS_ENCRYPT_PAGE_ACTION: PropTypes.func,
    RESET_PAGE_ACTION: PropTypes.func,
    CHANGE_TAB_ACTION: PropTypes.func,
    INTRO_SELECT_ACTION: PropTypes.func,
    INTRO_LOCK_ACTION: PropTypes.func,
    INTRO_UNLOCK_ACTION: PropTypes.func,
    ALGO_SELECT_ACTION: PropTypes.func,
    ALGO_LOCK_ACTION: PropTypes.func,
    ALGO_UNLOCK_ACTION: PropTypes.func,
    KEY_SELECT_ACTION: PropTypes.func,
    KEY_LOCK_ACTION: PropTypes.func,
    KEY_UNLOCK_ACTION: PropTypes.func,
    DECRYPT_SELECT_ACTION: PropTypes.func,
    DECRYPT_LOCK_ACTION: PropTypes.func,
    DECRYPT_UNLOCK_ACTION: PropTypes.func,
    ENCRYPT_SELECT_ACTION: PropTypes.func,
    ENCRYPT_LOCK_ACTION: PropTypes.func,
    ENCRYPT_UNLOCK_ACTION: PropTypes.func,
    KNAPSACK_SELECT_ACTION: PropTypes.func,
    KNAPSACK_LOCK_ACTION: PropTypes.func,
    KNAPSACK_UNLOCK_ACTION: PropTypes.func,
    UNLOCK_ALL_ACTION: PropTypes.func,
    NEXT_KEY_PAGE_ACTION: PropTypes.func,
    PREVIOUS_KEY_PAGE_ACTION: PropTypes.func,
    UPDATE_INVERSE_ACTION: PropTypes.func,
    UPDATE_PUBLIC_KEY_STRING_ACTION: PropTypes.func,
    UPDATE_PUBLIC_KEY_ARRAY_ACTION: PropTypes.func,
    UPDATE_ENCRYPTION_PADDING_ACTION: PropTypes.func,
    UPDATE_ENCRYPTION_BLOCKS_ACTION: PropTypes.func,
    UPDATE_ENCRYPTED_STRING_ACTION: PropTypes.func,
    HIDE_TROPHY_ACTION: PropTypes.func,
  }),
  tabName: PropTypes.string.isRequired,
  tabPage: PropTypes.number.isRequired,
  allowNextPage: PropTypes.bool.isRequired,
  maxPage: PropTypes.number.isRequired,
  showTrophy: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  showTrophy: state.trophy.showTrophy,
  tabName: state.lessonPageTabAndPages.tabName,
  tabPage: state.lessonPageTabAndPages.tabPage,
  allowNextPage: state.lessonPageTabAndPages.allowNextPage,
  maxPage: state.lessonPageTabAndPages.maxPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      NEXT_INTRO_PAGE_ACTION,
      PREVIOUS_INTRO_PAGE_ACTION,
      NEXT_GCD_PAGE_ACTION,
      PREVIOUS_GCD_PAGE_ACTION,
      NEXT_ENCRYPT_PAGE_ACTION,
      NEXT_DECRYPT_PAGE_ACTION,
      PREVIOUS_DECRYPT_PAGE_ACTION,
      PREVIOUS_ENCRYPT_PAGE_ACTION,
      RESET_PAGE_ACTION,
      CHANGE_TAB_ACTION,
      INTRO_SELECT_ACTION,
      INTRO_LOCK_ACTION,
      INTRO_UNLOCK_ACTION,
      ALGO_SELECT_ACTION,
      ALGO_LOCK_ACTION,
      ALGO_UNLOCK_ACTION,
      KEY_SELECT_ACTION,
      KEY_LOCK_ACTION,
      KEY_UNLOCK_ACTION,
      DECRYPT_SELECT_ACTION,
      DECRYPT_LOCK_ACTION,
      DECRYPT_UNLOCK_ACTION,
      ENCRYPT_SELECT_ACTION,
      ENCRYPT_LOCK_ACTION,
      ENCRYPT_UNLOCK_ACTION,
      KNAPSACK_SELECT_ACTION,
      KNAPSACK_LOCK_ACTION,
      KNAPSACK_UNLOCK_ACTION,
      UNLOCK_ALL_ACTION,
      NEXT_KEY_PAGE_ACTION,
      PREVIOUS_KEY_PAGE_ACTION,
      UPDATE_INVERSE_ACTION,
      UPDATE_PUBLIC_KEY_STRING_ACTION,
      UPDATE_PUBLIC_KEY_ARRAY_ACTION,
      UPDATE_ENCRYPTION_PADDING_ACTION,
      UPDATE_ENCRYPTION_BLOCKS_ACTION,
      UPDATE_ENCRYPTED_STRING_ACTION,
      HIDE_TROPHY_ACTION,
    },
    dispatch,
  ),
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnTab));
