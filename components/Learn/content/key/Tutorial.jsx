/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, ScrollView, Keyboard, TouchableWithoutFeedback, Text, Image } from 'react-native';
// import stylesheet.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Animatable from 'react-native-animatable';
import { Card, Button as RneButton } from 'react-native-elements';
import styles from './styles';
// begin redux imports

import ProgressBar1 from '../../../../assets/images/FiveStepProgress/ProgressBar1.png';
import ProgressBar2 from '../../../../assets/images/FiveStepProgress/ProgressBar2.png';
import ProgressBar3 from '../../../../assets/images/FiveStepProgress/ProgressBar3.png';
import ProgressBar4 from '../../../../assets/images/FiveStepProgress/ProgressBar4.png';
import ProgressBar5 from '../../../../assets/images/FiveStepProgress/ProgressBar5.png';

import Error from '../../../../assets/images/Error.png';
import InfoIcon from '../../../../assets/images/InfoIcon.png';
import Unlock from '../../../../assets/images/unlock.png';

import { ALLOW_NEXT_PAGE_ACTION, NEXT_KEY_PAGE_ACTION } from '../../../../redux-modules/actions/tabPage';

import {
  UPDATE_PRIVATE_KEY_STRING_ACTION,
  UPDATE_PRIVATE_KEY_SUM_ACTION,
  UPDATE_PRIVATE_KEY_ARRAY_ACTION,
  UPDATE_MODULO_ACTION,
  UPDATE_MULTIPLIER_ACTION,
  UPDATE_INVERSE_ACTION,
  UPDATE_PUBLIC_KEY_STRING_ACTION,
  UPDATE_PUBLIC_KEY_ARRAY_ACTION,
} from '../../../../redux-modules/actions/updateParameters';

import { UNLOCK_TROPHY_KEYRING, SHOW_TROPHY_ACTION } from '../../../../redux-modules/actions/manageTrophies';

import {
  ENCRYPT_LOCK_ACTION,
  DECRYPT_LOCK_ACTION,
  ENCRYPT_UNLOCK_ACTION,
} from '../../../../redux-modules/actions/learnPageLock';

import PopUp from '../../../Common/PopUp';
import AlertPopUp from '../../../Common/AlertPopUp';
import Quiz from '../../quiz/Quiz';
// contents
import contents from './contents';

// dynamic pages not static pages.
class KeyPage extends Component {
  constructor(props) {
    super(props);
    const { modulo, multiplier, privateKeyString } = this.props;

    const reduxMod = modulo;
    const reduxMultipler = multiplier;

    // local state not affected by redux
    this.state = {
      currentPrivateKey: privateKeyString, // we do not need to persist this state, nor do we need to store this state elsewhere yet.
      currentModulo: reduxMod === 0 ? '' : reduxMod, // we do not need to persist this state, nor do we need to store this state elsewhere yet.
      currentMultiplier: reduxMultipler === 0 ? '' : reduxMultipler, // we do not need to persist this state, nor do we need to store this state elsewhere yet.
      showError: false,
      inverseLoaded: false,
      pkLoaded: false,
      showSuperIncreasingInfoPopUp: false,
      showCoprimeInfoPopUp: false,
      showKeyMultiplicationInfoPopUp: false,
      showModulusInfoPopUp: false,
      errorMessage: '',
      keyboardVisiblity: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  // eslint-disable-next-line no-unused-vars
  handleKeyboardDidShow = event => {
    this.setState({
      keyboardVisiblity: true,
    });
  };

  // eslint-disable-next-line no-unused-vars
  keyboardDidHide = event => {
    this.setState({
      keyboardVisiblity: false,
    });
  };

  superIncreasingInfoPopUp = () => {
    return (
      <>
        <Text style={styles.page1.popUpTextStyle}>
          Every number of the sequence is {'>'} the sum of all previous numbers in the sequence
          {'\n\n'}
          Eg. a = 2, 5, 10 where 2 {'<'} 5 and 2 + 5 {'<'} 10,
        </Text>
      </>
    );
  };

  modulusInfoPopUp = () => {
    return (
      <>
        <Text style={styles.page1.popUpTextStyle}>
          Eg. <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>a</Text> = 2, 5, 10, sum of{' '}
          <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>a</Text> = 17{'\n'}
          <Text style={{ ...styles.page1.modulusStyle, ...styles.page1.boldFont }}>m</Text> = 39 which is {'>'} 17 (sum
          of <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>a</Text>)
        </Text>
      </>
    );
  };

  superCoprimeInfoPopUp = () => {
    return (
      <>
        <Text style={styles.page1.popUpTextStyle}>
          Co-prime means <Text style={{ ...styles.page1.GCDStyle, ...styles.page1.boldFont }}>gcd (m, w) = 1</Text>
          {'\n'}
          Eg: <Text style={{ ...styles.page1.modulusStyle, ...styles.page1.boldFont }}>m</Text> = 39,{' '}
          <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>w</Text> = 11 so{' '}
          <Text style={{ ...styles.page1.GCDStyle, ...styles.page1.boldFont }}>gcd (39, 11) = 1</Text>
        </Text>
      </>
    );
  };

  keyMultiplicationInfoPopUp = () => {
    return (
      <>
        <Text style={styles.page1.popUpTextStyle}>
          Eg:{'\n'}
          b1 = 11 * 2 = 22 (mod 39){'\n'}
          b2 = 11 * 5 = 16 (mod 39){'\n'}
          b3 = 11 * 10 = 32 (mod 39)
        </Text>
      </>
    );
  };

  disableError = () => {
    this.setState({
      showError: false,
      errorMessage: '',
    });
  };

  enableError = message => {
    this.setState({
      showError: true,
      errorMessage: message,
    });
  };

  isValidNumber = stringToVerify => {
    const str = String(stringToVerify);
    const reg = new RegExp('^[0-9]+$');
    return str.match(reg) !== null;
  };

  validateNumeric = () => {
    const { currentPrivateKey } = this.state;
    // splits the private key.
    const splitKey = currentPrivateKey.split(',');
    for (let i = 0; i < splitKey.length; i += 1) {
      const checkNum = this.isValidNumber(splitKey[i]);
      if (!checkNum) {
        // TODO: declare error in popup.
        this.setState({
          currentPrivateKey: '', // TODO: reset the value in textbox too
        });
        return false;
      }
    }

    return true;
  };

  isGreater = (a, b, idx) => {
    // returns true by default if idx is 0, if not whether a > b.
    console.log(`Comparing ${a} ${b}`);
    return idx === 0 ? true : a < b;
  };

  isGreaterInteger = (a, b) => {
    return a < b;
  };

  calculateGCD = (mod, multiplier) => {
    if (mod > multiplier) {
      // swap them around.
      const temp = multiplier;
      multiplier = mod;
      mod = temp;
    }
    while (mod) {
      const temp = mod;
      mod = multiplier % mod;
      multiplier = temp;
    }
    console.log(`Final gcd ${multiplier}`);
    return multiplier === 1;
  };

  xgcd = (a, m) => {
    // validate inputs
    [a, m] = [Number(a), Number(m)];
    if (Number.isNaN(a) || Number.isNaN(m)) {
      return NaN; // invalid input
    }
    a = ((a % m) + m) % m;
    if (!a || m < 2) {
      return NaN; // invalid input
    }
    // find the gcd
    const s = [];
    let b = m;
    while (b) {
      [a, b] = [b, a % b];
      s.push({ a, b });
    }
    if (a !== 1) {
      return NaN; // inverse does not exists
    }
    // find the inverse
    let x = 1;
    let y = 0;
    for (let i = s.length - 2; i >= 0; i -= 1) {
      [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
    }
    return ((y % m) + m) % m;
  };

  validateSuperIncreasing = total => {
    const { currentPrivateKey } = this.state;
    // splits the private key.
    const splitKey = currentPrivateKey.split(',');
    let currentMax = 0;
    for (let i = 0; i < splitKey.length; i += 1) {
      const curNo = Number(splitKey[i]);
      const checkSuperIncreasing = this.isGreater(currentMax, curNo, i);
      if (checkSuperIncreasing) {
        currentMax += curNo;
      } else {
        this.enableError(
          `Sequence is not superincreasing! ${splitKey
            .slice(0, i)
            .join('+')} = ${currentMax}, ${curNo} is not greater than ${currentMax}!`,
        );
        return false;
      }
    }
    total.size = splitKey.length - 1;
    total.total = currentMax;
    total.arrOfVals = splitKey;
    Keyboard.dismiss();
    return true;
  };

  validatePrivateKey = () => {
    const { actions } = this.props;
    const { currentPrivateKey } = this.state;
    if (!this.validateNumeric()) {
      // TODO: show an error message
      this.enableError('Non numeric message received!');
    } else {
      // check if it is superincreasing
      const total = { total: 0, size: 0, arrOfVals: [] }; // create object to pass by reference1
      if (this.validateSuperIncreasing(total)) {
        // sets the state.
        actions.ALLOW_NEXT_PAGE_ACTION();
        actions.UPDATE_PRIVATE_KEY_SUM_ACTION(total.total);
        actions.UPDATE_PRIVATE_KEY_STRING_ACTION(currentPrivateKey);
        actions.UPDATE_PRIVATE_KEY_ARRAY_ACTION(total.arrOfVals);
        Keyboard.dismiss();
      }
    }
  };

  showKeyMultiplicationInfoPopUp = () => {
    this.setState({ showKeyMultiplicationInfoPopUp: true });
  };

  showCoprimeInfoPopUp = () => {
    this.setState({ showCoprimeInfoPopUp: true });
  };

  showModulusInfoPopUp = () => {
    this.setState({
      showModulusInfoPopUp: true,
    });
  };

  showSuperIncreasingInfoPopUp = () => {
    this.setState({
      showSuperIncreasingInfoPopUp: true,
    });
  };

  setMultiplier = text => {
    this.setState({ currentMultiplier: text });
  };

  setModulo = text => {
    this.setState({
      currentModulo: text,
    });
  };

  setPrivateKey = text => {
    this.setState({
      currentPrivateKey: text,
    });
  };

  validateModulus = () => {
    const { actions, privateKeySum } = this.props;
    const { currentModulo } = this.state;
    if (!this.isValidNumber(currentModulo)) {
      this.enableError('Non numeric modulo received!');
    } else {
      // check if is bigger
      const curMod = Number(currentModulo);
      if (!this.isGreaterInteger(privateKeySum, curMod)) {
        this.enableError(`Modulus is not larger than ${privateKeySum}!`);
      } else {
        // integer is greater.
        actions.ALLOW_NEXT_PAGE_ACTION();
        actions.UPDATE_MODULO_ACTION(curMod);
        Keyboard.dismiss();
      }
    }
  };

  validateMultiplier = () => {
    const { actions, modulo } = this.props;
    const { currentMultiplier } = this.state;

    const mod = Number(modulo);

    if (!this.isValidNumber(currentMultiplier)) {
      this.enableError('Non numeric multiplier received!');
    } else {
      const curMult = Number(currentMultiplier);

      if (!this.calculateGCD(mod, curMult)) {
        this.enableError(`GCD of ${mod} and ${curMult} is not 1!`);
      } else {
        // integer is greater.
        actions.ALLOW_NEXT_PAGE_ACTION();
        actions.UPDATE_MULTIPLIER_ACTION(curMult);
        // have to relock decryption to force them to generate pk and inverse again.
        actions.DECRYPT_LOCK_ACTION();
        actions.ENCRYPT_LOCK_ACTION();
        Keyboard.dismiss();
        this.setState({
          inverseLoaded: false,
          pkLoaded: false,
        });
      }
    }
  };

  computePublicKey = () => {
    const { privateKeyArr, modulo, multiplier } = this.props;
    // for every element in the public key, multiply by the multiplier and get the remainder.
    const privateKey = privateKeyArr;
    const newPk = [];
    for (let i = 0; i < privateKey.length; i += 1) {
      const pub = (privateKey[i] * multiplier) % modulo;
      newPk.push(pub);
    }
    return newPk;
  };

  loadInverse = () => {
    const { actions, multiplier, modulo } = this.props;
    const currentInverse = this.xgcd(multiplier, modulo);
    actions.UPDATE_INVERSE_ACTION(currentInverse);
    actions.ALLOW_NEXT_PAGE_ACTION();
    // have to relock decryption to force them to generate pk and inverse again.
    actions.DECRYPT_LOCK_ACTION();
    actions.ENCRYPT_LOCK_ACTION();
    this.setState({
      inverseLoaded: true,
      pkLoaded: false,
    });
  };

  generatePubKey = () => {
    const { actions } = this.props;
    const pub = this.computePublicKey();
    actions.UPDATE_PUBLIC_KEY_ARRAY_ACTION(pub);
    actions.UPDATE_PUBLIC_KEY_STRING_ACTION(pub.join());
    actions.ALLOW_NEXT_PAGE_ACTION();
    // have to relock decryption to force them to generate pk and inverse again.
    actions.DECRYPT_LOCK_ACTION();
    actions.ENCRYPT_LOCK_ACTION();
    this.setState({
      pkLoaded: true,
    });
  };

  unlockEncryption = () => {
    const { actions, trophyKeyRing } = this.props;
    // always unlock encrypt by default.
    actions.ENCRYPT_UNLOCK_ACTION();
    actions.UNLOCK_TROPHY_KEYRING();
    if (!trophyKeyRing) {
      actions.SHOW_TROPHY_ACTION();
    }
  };

  getSeventhPage = () => {
    return (
      <Animatable.View animation="slideInDown">
        <Card title="Unlocked Next Tab!">
          <RneButton
            type="clear"
            icon={<Image source={Unlock} style={styles.page1.unlockIconStyle} />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            onPress={() => {
              this.unlockEncryption();
            }}
          />
        </Card>
      </Animatable.View>
    );
  };

  getSixthPage = () => {
    const { actions } = this.props;
    return (
      <>
        <Quiz
          quizType="KEYGEN"
          callback={() => {
            actions.ALLOW_NEXT_PAGE_ACTION();
            actions.NEXT_KEY_PAGE_ACTION();
          }}
        />
      </>
    );
  };

  getFifthPage = () => {
    const { pkLoaded } = this.state;
    const Page5 = contents.page5;
    return (
      <Page5
        pkLoaded={pkLoaded}
        generatePubKey={() => {
          this.generatePubKey();
        }}
        showKeyMultiplicationInfoPopUp={() => {
          this.showKeyMultiplicationInfoPopUp();
        }}
      />
    );
  };

  getFourthPage = () => {
    const { inverseLoaded } = this.state;
    const Page4 = contents.page4;
    return (
      <Page4
        loadInverse={() => {
          this.loadInverse();
        }}
        inverseLoaded={inverseLoaded}
      />
    );
  };

  getThirdPage = () => {
    const { keyboardVisiblity } = this.state;
    const Page3 = contents.page3;
    return (
      <Page3
        keyboardVisiblity={keyboardVisiblity}
        showCoprimeInfoPopUp={() => {
          this.showCoprimeInfoPopUp();
        }}
        setMultiplier={text => {
          this.setMultiplier(text);
        }}
        validateMultiplier={() => {
          this.validateMultiplier();
        }}
      />
    );
  };

  getSecondPage = () => {
    const { keyboardVisiblity } = this.state;
    const Page2 = contents.page2;
    return (
      <Page2
        keyboardVisiblity={keyboardVisiblity}
        showModulusInfoPopUp={() => {
          this.showModulusInfoPopUp();
        }}
        setModulo={text => {
          this.setModulo(text);
        }}
        validateModulus={() => {
          this.validateModulus();
        }}
      />
    );
  };

  getFirstPage = () => {
    const { keyboardVisiblity } = this.state;
    const Page1 = contents.page1;
    return (
      <Page1
        keyboardVisiblity={keyboardVisiblity}
        updatePrivateKey={text => {
          this.setPrivateKey(text);
        }}
        validatePrivateKey={() => {
          this.validatePrivateKey();
        }}
        showSuperIncreasingInfoPopUp={() => {
          this.showSuperIncreasingInfoPopUp();
        }}
      />
    );
  };

  checkPageNo = () => {
    const { tabPage } = this.props;
    return tabPage;
  };

  getProgressImage = () => {
    const pageNo = this.checkPageNo();
    switch (pageNo) {
      case 1:
        return ProgressBar1;
      case 2:
        return ProgressBar2;
      case 3:
        return ProgressBar3;
      case 4:
        return ProgressBar4;
      case 5:
        return ProgressBar5;
      default:
        return ProgressBar1;
    }
  };

  getPageElements = () => {
    const pageNo = this.checkPageNo();
    switch (pageNo) {
      case 1:
        return this.getFirstPage();
      case 2:
        return this.getSecondPage();
      case 3:
        return this.getThirdPage();
      case 4:
        return this.getFourthPage();
      case 5:
        return this.getFifthPage();
      case 6:
        return this.getSixthPage();
      case 7:
        return this.getSeventhPage();
      default:
        return this.getFirstPage();
    }
  };

  render() {
    const {
      showError,
      errorMessage,
      showSuperIncreasingInfoPopUp,
      showModulusInfoPopUp,
      showCoprimeInfoPopUp,
      showKeyMultiplicationInfoPopUp,
      keyboardVisiblity,
    } = this.state;
    const pageNo = this.checkPageNo();
    return (
      /*
        Note how the animation here is done differently - this is much more pleasent for User Experience than forcing them to jump to the top every time
      */
      <ScrollView
        ref={ref => {
          this.scrollView = ref;
        }}
        // eslint-disable-next-line no-unused-vars
        onContentSizeChange={(contentWidth, contentHeight) => {
          if (pageNo < 6) {
            this.scrollView.scrollToEnd({ animated: true });
          }
        }}
      >
        {showKeyMultiplicationInfoPopUp ? (
          <AlertPopUp
            icon={InfoIcon}
            renderedBlocks={this.keyMultiplicationInfoPopUp()}
            callback={() => {
              this.setState({ showKeyMultiplicationInfoPopUp: false });
            }}
            visibility={showKeyMultiplicationInfoPopUp}
          />
        ) : null}
        {showCoprimeInfoPopUp ? (
          <AlertPopUp
            icon={InfoIcon}
            renderedBlocks={this.superCoprimeInfoPopUp()}
            callback={() => {
              this.setState({ showCoprimeInfoPopUp: false });
            }}
            visibility={showCoprimeInfoPopUp}
          />
        ) : null}
        {showSuperIncreasingInfoPopUp ? (
          <AlertPopUp
            icon={InfoIcon}
            renderedBlocks={this.superIncreasingInfoPopUp()}
            callback={() => {
              this.setState({ showSuperIncreasingInfoPopUp: false });
            }}
            visibility={showSuperIncreasingInfoPopUp}
          />
        ) : null}
        {showModulusInfoPopUp ? (
          <AlertPopUp
            icon={InfoIcon}
            renderedBlocks={this.modulusInfoPopUp()}
            callback={() => {
              this.setState({ showModulusInfoPopUp: false });
            }}
            visibility={showModulusInfoPopUp}
          />
        ) : null}
        {showError ? (
          <PopUp visibility={showError} close={this.disableError} message={errorMessage} icon={Error} />
        ) : null}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {keyboardVisiblity ? null : (
              <>
                <Text style={styles.page1.titleStyle}>Key Generation</Text>
                <View style={{ alignItems: 'center' }}>
                  {pageNo <= 5 ? <Image style={styles.page1.progressBarSize} source={this.getProgressImage()} /> : null}
                </View>
              </>
            )}
          </View>
        </TouchableWithoutFeedback>
        {this.getPageElements()}
      </ScrollView>
    );
  }
}

KeyPage.propTypes = {
  trophyKeyRing: PropTypes.bool.isRequired,
  modulo: PropTypes.number.isRequired,
  multiplier: PropTypes.number.isRequired,
  privateKeyString: PropTypes.string.isRequired,
  privateKeySum: PropTypes.number.isRequired,
  tabPage: PropTypes.number.isRequired,
  privateKeyArr: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.shape({
    ALLOW_NEXT_PAGE_ACTION: PropTypes.func,
    UPDATE_PRIVATE_KEY_STRING_ACTION: PropTypes.func,
    UPDATE_PRIVATE_KEY_SUM_ACTION: PropTypes.func,
    UPDATE_PRIVATE_KEY_ARRAY_ACTION: PropTypes.func,
    UPDATE_MODULO_ACTION: PropTypes.func,
    UPDATE_MULTIPLIER_ACTION: PropTypes.func,
    UPDATE_INVERSE_ACTION: PropTypes.func,
    UPDATE_PUBLIC_KEY_ARRAY_ACTION: PropTypes.func,
    UPDATE_PUBLIC_KEY_STRING_ACTION: PropTypes.func,
    ENCRYPT_LOCK_ACTION: PropTypes.func,
    DECRYPT_LOCK_ACTION: PropTypes.func,
    NEXT_KEY_PAGE_ACTION: PropTypes.func,
    ENCRYPT_UNLOCK_ACTION: PropTypes.func,
    UNLOCK_TROPHY_KEYRING: PropTypes.func,
    SHOW_TROPHY_ACTION: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  lockState: state,
  trophyKeyRing: state.trophy.trophyKeyRing,
  trophyKeymaster: state.trophy.trophyKeymaster,
  modulo: state.updateParameters.modulo,
  multiplier: state.updateParameters.multiplier,
  privateKeyString: state.updateParameters.privateKeyString,
  privateKeyArr: state.updateParameters.privateKeyArr,
  privateKeySum: state.updateParameters.privateKeySum,
  tabPage: state.lessonPageTabAndPages.tabPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ALLOW_NEXT_PAGE_ACTION,
      UPDATE_PRIVATE_KEY_STRING_ACTION,
      UPDATE_PRIVATE_KEY_SUM_ACTION,
      UPDATE_PRIVATE_KEY_ARRAY_ACTION,
      UPDATE_MODULO_ACTION,
      UPDATE_MULTIPLIER_ACTION,
      UPDATE_INVERSE_ACTION,
      UPDATE_PUBLIC_KEY_ARRAY_ACTION,
      UPDATE_PUBLIC_KEY_STRING_ACTION,
      ENCRYPT_LOCK_ACTION,
      DECRYPT_LOCK_ACTION,
      NEXT_KEY_PAGE_ACTION,
      ENCRYPT_UNLOCK_ACTION,
      UNLOCK_TROPHY_KEYRING,
      SHOW_TROPHY_ACTION,
    },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(KeyPage);
