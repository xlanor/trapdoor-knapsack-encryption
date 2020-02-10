// begin react/rn imports
import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { View, Image, TouchableOpacity } from 'react-native';

import PropTypes from 'react-proptypes';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

import { CHANGE_TAB_ACTION } from '../../redux-modules/actions/tabPage';

// importing image assets
// unlocked
import Algo from '../../assets/images/Algo.png';
import Decrypt from '../../assets/images/Decrypt.png';
import Encrypt from '../../assets/images/Encrypt.png';
import KnapSack from '../../assets/images/KnapSack.png';
import Key from '../../assets/images/Key.png';
import Intro from '../../assets/images/Intro.png';

// locked
import AlgoLocked from '../../assets/images/AlgoLocked.png';
import DecryptLocked from '../../assets/images/DecryptLocked.png';
import EncryptLocked from '../../assets/images/EncryptLocked.png';
import KnapSackLocked from '../../assets/images/KnapSackLocked.png';
import KeyLocked from '../../assets/images/KeyLocked.png';

// selected
import EncryptSelected from '../../assets/images/EncryptSelected.png';
import DecryptSelected from '../../assets/images/DecryptSelected.png';
import KnapSackSelected from '../../assets/images/KnapSackSelected.png';
import AlgoSelected from '../../assets/images/AlgoSelected.png';
import KeySelected from '../../assets/images/KeySelected.png';
import IntroSelected from '../../assets/images/IntroSelected.png';

// invalid icon
import AlertIcon from '../../assets/images/alert.png';

// import stylesheet.
import styles from './styles';

// import other components.
import AlertPopUp from '../Common/AlertPopUp';
import LearnTab from './LearnTab';

class LearnParent extends Component {
  constructor(props) {
    super(props);
    // temporary, we need to replace this with
    // a state defined in redux so that the state
    // is able to persist throughout app shutdowns.
    this.state = {
      displayPopup: false,
      popupMessage: 'An error has occured',
    };
  }

  updatePopupMessage = messageString => {
    this.setState({
      displayPopup: true,
      popupMessage: messageString,
    });
  };

  getAlgoIcon = () => {
    // lockState is the result of our redux state
    const { algoLocked, algoSelected, actions } = this.props;
    if (algoLocked === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.updatePopupMessage('You have not unlocked this tab!');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={AlgoLocked} />
        </TouchableOpacity>
      );
    }
    if (algoSelected === true) {
      return (
        // to be replaced when kevin is done with selected icon
        <TouchableOpacity
          onPress={() => {
            actions.ALGO_SELECT_ACTION();
            actions.CHANGE_TAB_ACTION('gcd');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={AlgoSelected} />
        </TouchableOpacity>
      );
    }
    // not selected, but unlocked.
    return (
      <TouchableOpacity
        onPress={() => {
          actions.ALGO_SELECT_ACTION();
          actions.CHANGE_TAB_ACTION('gcd');
        }}
      >
        <Image style={styles.learnParent.imageSize} source={Algo} />
      </TouchableOpacity>
    );
  };

  getDecryptIcon = () => {
    // lockState is the result of our redux state
    const { decryptSelected, decryptLocked, actions } = this.props;
    if (decryptLocked === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.updatePopupMessage('You have not unlocked this tab!');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={DecryptLocked} />
        </TouchableOpacity>
      );
    }
    if (decryptSelected === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            actions.DECRYPT_SELECT_ACTION();
            actions.CHANGE_TAB_ACTION('decrypt');
            console.log('Changing to decrypt');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={DecryptSelected} />
        </TouchableOpacity>
      );
    }
    // not selected, but unlocked.
    return (
      <TouchableOpacity
        onPress={() => {
          actions.DECRYPT_SELECT_ACTION();
          actions.CHANGE_TAB_ACTION('decrypt');
          console.log('Changing to decrypt');
        }}
      >
        <Image style={styles.learnParent.imageSize} source={Decrypt} />
      </TouchableOpacity>
    );
  };

  getEncryptIcon = () => {
    // lockState is the result of our redux state
    const { encryptLocked, encryptSelected, actions } = this.props;
    if (encryptLocked === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.updatePopupMessage('You have not unlocked this tab!');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={EncryptLocked} />
        </TouchableOpacity>
      );
    }
    if (encryptSelected === true) {
      return (
        // to be replaced when kevin is done with selected icon
        <TouchableOpacity
          onPress={() => {
            actions.ENCRYPT_SELECT_ACTION();
            actions.CHANGE_TAB_ACTION('encrypt');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={EncryptSelected} />
        </TouchableOpacity>
      );
    }
    // not selected, but unlocked.
    return (
      <TouchableOpacity
        onPress={() => {
          actions.ENCRYPT_SELECT_ACTION();
          actions.CHANGE_TAB_ACTION('encrypt');
        }}
      >
        <Image style={styles.learnParent.imageSize} source={Encrypt} />
      </TouchableOpacity>
    );
  };

  getKnapsackIcon = () => {
    // lockState is the result of our redux state
    const { knapSackLocked, knapSackSelected, actions } = this.props;
    if (knapSackLocked === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.updatePopupMessage('You have not unlocked this tab!');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={KnapSackLocked} />
        </TouchableOpacity>
      );
    }
    if (knapSackSelected === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            actions.KNAPSACK_SELECT_ACTION();
            actions.CHANGE_TAB_ACTION('simulator');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={KnapSackSelected} />
        </TouchableOpacity>
      );
    }
    // not selected, but unlocked.
    return (
      <TouchableOpacity
        onPress={() => {
          actions.KNAPSACK_SELECT_ACTION();
          actions.CHANGE_TAB_ACTION('simulator');
        }}
      >
        <Image style={styles.learnParent.imageSize} source={KnapSack} />
      </TouchableOpacity>
    );
  };

  getKeyIcon = () => {
    // lockState is the result of our redux state
    const { keyLocked, keySelected, actions } = this.props;
    if (keyLocked === true) {
      return (
        <TouchableOpacity
          onPress={() => {
            this.updatePopupMessage('You have not unlocked this tab!');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={KeyLocked} />
        </TouchableOpacity>
      );
    }
    if (keySelected === true) {
      return (
        // to be replaced when kevin is done with selected icon
        <TouchableOpacity
          onPress={() => {
            actions.KEY_SELECT_ACTION();
            actions.CHANGE_TAB_ACTION('key');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={KeySelected} />
        </TouchableOpacity>
      );
    }
    // not selected, but unlocked.
    return (
      <TouchableOpacity
        onPress={() => {
          actions.KEY_SELECT_ACTION();
          actions.CHANGE_TAB_ACTION('key');
        }}
      >
        <Image style={styles.learnParent.imageSize} source={Key} />
      </TouchableOpacity>
    );
  };

  getIntroIcon = () => {
    // lockState is the result of our redux state
    const { introLocked, introSelected, actions } = this.props;
    if (introLocked === true) {
      return <Image style={styles.learnParent.imageSize} source={Intro} />;
    }
    if (introSelected === true) {
      return (
        // to be replaced when kevin is done with selected icon
        <TouchableOpacity
          onPress={() => {
            console.log('Clicked');
            actions.INTRO_SELECT_ACTION();
            actions.CHANGE_TAB_ACTION('intro');
          }}
        >
          <Image style={styles.learnParent.imageSize} source={IntroSelected} />
        </TouchableOpacity>
      );
    }
    // not selected, but unlocked.
    return (
      <TouchableOpacity
        onPress={() => {
          actions.INTRO_SELECT_ACTION();
          actions.CHANGE_TAB_ACTION('intro');
        }}
      >
        <Image style={styles.learnParent.imageSize} source={Intro} />
      </TouchableOpacity>
    );
  };

  getImages = () => {
    return (
      <View style={styles.learnParent.wrappingIconView}>
        {/* Must have the nested view to allow flexdirection to be preserved! */}
        <View style={styles.learnParent.nestedIconView}>
          {this.getIntroIcon()}
          {this.getAlgoIcon()}
          {this.getKeyIcon()}
          {this.getEncryptIcon()}
          {this.getDecryptIcon()}
          {this.getKnapsackIcon()}
        </View>
      </View>
    );
  };

  render() {
    const { displayPopup, popupMessage } = this.state;
    // after 3 seconds, auto dismiss the alert popup
    setTimeout(() => {
      if (displayPopup) this.setState({ displayPopup: false });
    }, 3000);

    return (
      <>
        <AlertPopUp
          messageContent={popupMessage}
          icon={AlertIcon}
          callback={() => this.setState({ displayPopup: false })}
          visibility={displayPopup}
        />
        <View style={{ flex: 6 }}>
          <View style={styles.learnParent.wrapperViewBackground}>{this.getImages()}</View>
          <View style={styles.learnParent.bodyViewBackground}>
            <LearnTab />
          </View>
        </View>
      </>
    );
  }
}

LearnParent.propTypes = {
  actions: PropTypes.shape({
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
    CHANGE_TAB_ACTION: PropTypes.func,
  }),
  algoLocked: PropTypes.bool.isRequired,
  algoSelected: PropTypes.bool.isRequired,
  decryptLocked: PropTypes.bool.isRequired,
  decryptSelected: PropTypes.bool.isRequired,
  encryptLocked: PropTypes.bool.isRequired,
  encryptSelected: PropTypes.bool.isRequired,
  knapSackLocked: PropTypes.bool.isRequired,
  knapSackSelected: PropTypes.bool.isRequired,
  keyLocked: PropTypes.bool.isRequired,
  keySelected: PropTypes.bool.isRequired,
  introLocked: PropTypes.bool.isRequired,
  introSelected: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  lockState: state,
  algoLocked: state.lessonPage.algoLocked,
  algoSelected: state.lessonPage.algoSelected,
  decryptLocked: state.lessonPage.decryptLocked,
  decryptSelected: state.lessonPage.decryptSelected,
  encryptLocked: state.lessonPage.isRequired,
  encryptSelected: state.lessonPage.isRequired,
  knapSackLocked: state.lessonPage.isRequired,
  knapSackSelected: state.lessonPage.isRequired,
  keyLocked: state.lessonPage.isRequired,
  keySelected: state.lessonPage.isRequired,
  introLocked: state.lessonPage.isRequired,
  introSelected: state.lessonPage.isRequired,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
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
      CHANGE_TAB_ACTION,
    },
    dispatch,
  ),
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnParent));
