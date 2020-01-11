import React, { Component } from 'React';

import {
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
// import stylesheet.
import styles from './styles';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProgressBar1 from '../../../../assets/images/FiveStepProgress/ProgressBar1.png'
import ProgressBar2 from '../../../../assets/images/FiveStepProgress/ProgressBar2.png'
import ProgressBar3 from '../../../../assets/images/FiveStepProgress/ProgressBar3.png'
import ProgressBar4 from '../../../../assets/images/FiveStepProgress/ProgressBar4.png'
import ProgressBar5 from '../../../../assets/images/FiveStepProgress/ProgressBar5.png'

import Error from '../../../../assets/images/Error.png'
import Alert from '../../../../assets/images/alert.png'

import {
  ALLOW_NEXT_PAGE_ACTION
} from '../../../../actions/tabPage';

import {
  UPDATE_PRIVATE_KEY_STRING_ACTION,
  UPDATE_PRIVATE_KEY_SUM_ACTION,
  UPDATE_PRIVATE_KEY_ARRAY_ACTION,
  UPDATE_MODULO_ACTION,
  UPDATE_MULTIPLIER_ACTION,
  UPDATE_INVERSE_ACTION,
  UPDATE_PUBLIC_KEY_STRING_ACTION,
  UPDATE_PUBLIC_KEY_ARRAY_ACTION,
} from '../../../../actions/updateParameters';

import {
  ENCRYPT_LOCK_ACTION,
  DECRYPT_LOCK_ACTION,
} from '../../../../actions/learnPageLock';

import PopUp from '../../../Common/PopUp';
import CustomButton from '../../../Common/Button';
import AlertPopUp from '../../../Common/AlertPopUp';
import { TouchableHighlight } from 'react-native-gesture-handler';
// dynamic pages not static pages.
class KeyPage extends Component {
  constructor(props) {
    super(props);
    const { lockState } = this.props;

    let reduxMod = lockState.updateParameters.modulo
    let reduxMultipler = lockState.updateParameters.multiplier


    // local state not affected by redux
    this.state = {
      currentPrivateKey: lockState.updateParameters.privateKeyString, //we do not need to persist this state, nor do we need to store this state elsewhere yet.
      currentModulo: reduxMod == 0 ? "" : reduxMod, //we do not need to persist this state, nor do we need to store this state elsewhere yet.
      currentMultiplier: reduxMultipler == 0 ? "" : reduxMultipler, //we do not need to persist this state, nor do we need to store this state elsewhere yet.
      showError: false,
      inverseLoaded: false,
      pkLoaded: false,
      showSuperIncreasingInfoPopUp: false,
      errorMessage: "",
      keyboardVisiblity: false,
    }

  }
  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  handleKeyboardDidShow = event => {
    this.setState({
      keyboardVisiblity: true,
    })
  }

  keyboardDidHide = event => {
    this.setState({
      keyboardVisiblity: false,
    })
  }
  superIncreasingInfoPopUp = () => {
    return (
      <View>
        <View>
          <Text style={styles.page1.popUpTextStyle}>
            Every number of the sequence is >
            the sum of all previous numbers in the sequence
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.page1.popUpTextStyle}>
            Eg.  a = 2, 5, 10 where 2 {"<"} 5 and 2 + 5 {"<"} 10,
            </Text>
        </View>
      </View>
    )
  }
  modulusInfoPopUp = () => {
    return (
      <View>
        <Text style={styles.page1.popUpTextStyle}>
          Eg. a = 2, 5, 10, sum of a = 17
        </Text>
        <Text style={styles.page1.popUpTextStyle}>
          m = 39 which is > 17 (sum of a)
        </Text>
      </View>
    )
  }
  superCoprimeInfoPopUp = () => {
    return (
      <View>
        <Text style={styles.page1.popUpTextStyle}>
          Co-prime means gcd (m, w) = 1
        </Text>
        <Text style={styles.page1.popUpTextStyle}>
          Eg: m = 39, w = 11 so gcd (39, 11) = 1
        </Text>
      </View>
    )
  }
  keyMultiplicationInfoPopUp = () => {
    return (
      <View>
        <Text style={styles.page1.popUpTextStyle}>
          Eg:
        </Text>
        <Text style={styles.page1.popUpTextStyle}>
          b1 = 11 * 2 = 22 (mod 39)
        </Text>
        <Text style={styles.page1.popUpTextStyle}>
          b2 = 11 * 5 = 16 (mod 39)
        </Text>
        <Text style={styles.page1.popUpTextStyle}>
          b3 = 11 * 10 = 32 (mod 39)
        </Text>
      </View>
    )
  }
  disableError = () => {
    this.setState({
      showError: false,
      errorMessage: "",
    })
  }

  enableError = (message) => {
    this.setState({
      showError: true,
      errorMessage: message,
    })
  }

  isValidNumber = (stringToVerify) => {
    let str = String(stringToVerify);
    let reg = new RegExp('^[0-9]+$');
    return str.match(reg) === null ? false : true;
  }

  validateNumeric = () => {
    const { currentPrivateKey } = this.state;
    // splits the private key.
    let splitKey = currentPrivateKey.split(',');
    for (let i = 0; i < splitKey.length; i++) {
      let checkNum = this.isValidNumber(splitKey[i]);
      if (!checkNum) {
        // TODO: declare error in popup.
        this.setState({
          currentPrivateKey: "", // TODO: reset the value in textbox too
        })
        return false;
      }
    }

    return true;
  }

  isGreater = (a, b, idx) => {
    // returns true by default if idx is 0, if not whether a > b.
    console.log("Comparing " + a + " " + b)
    return idx == 0 ? true : a < b;
  }

  isGreaterInteger = (a, b) => {
    return a < b;
  }
  calculateGCD = (mod, multiplier) => {
    if (mod > multiplier) {
      // swap them around.
      let temp = multiplier
      multiplier = mod
      mod = temp
    }
    while (mod) {
      let temp = mod
      mod = multiplier % mod
      multiplier = temp
    }
    console.log("Final gcd " + multiplier)
    return (multiplier == 1)

  }
  xgcd = (a, m) => { // validate inputs
    [a, m] = [Number(a), Number(m)]
    if (Number.isNaN(a) || Number.isNaN(m)) {
      return NaN // invalid input
    }
    a = (a % m + m) % m
    if (!a || m < 2) {
      return NaN // invalid input
    }
    // find the gcd
    const s = []
    let b = m
    while (b) {
      [a, b] = [b, a % b]
      s.push({ a, b })
    }
    if (a !== 1) {
      return NaN // inverse does not exists
    }
    // find the inverse
    let x = 1
    let y = 0
    for (let i = s.length - 2; i >= 0; --i) {
      [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)]
    }
    return (y % m + m) % m

  }

  validateSuperIncreasing = (total) => {


    const { currentPrivateKey } = this.state;
    // splits the private key.
    let splitKey = currentPrivateKey.split(',');
    let currentMax = 0
    for (let i = 0; i < splitKey.length; i++) {
      let curNo = Number(splitKey[i])
      let checkSuperIncreasing = this.isGreater(currentMax, curNo, i)
      if (checkSuperIncreasing) {
        currentMax += (curNo);
      } else {
        this.enableError(`Sequence is not superincreasing! ${splitKey.slice(0, i).join("+")} = ${currentMax}, ${curNo} is not greater than ${currentMax}!`)
        return false;
      }
    }
    total.size = splitKey.length - 1
    total.total = currentMax
    total.arrOfVals = splitKey
    Keyboard.dismiss()
    return true;
  }

  validatePrivateKey = () => {
    const { actions } = this.props;
    const { currentPrivateKey } = this.state;
    if (!this.validateNumeric()) {
      // TODO: show an error message
      this.enableError("Non numeric message received!")
    } else {
      // check if it is superincreasing
      let total = { total: 0, size: 0, arrOfVals: [] } // create object to pass by reference1
      if (this.validateSuperIncreasing(total)) {
        // sets the state.
        actions.ALLOW_NEXT_PAGE_ACTION()
        actions.UPDATE_PRIVATE_KEY_SUM_ACTION(total.total)
        actions.UPDATE_PRIVATE_KEY_STRING_ACTION(currentPrivateKey)
        actions.UPDATE_PRIVATE_KEY_ARRAY_ACTION(total.arrOfVals)
        Keyboard.dismiss()
      }
    }

  }
  validateModulus = () => {
    const { lockState, actions } = this.props;
    const { currentModulo } = this.state;
    if (!this.isValidNumber(currentModulo)) {
      this.enableError("Non numeric modulo received!")
    } else {
      // check if is bigger
      let curMod = Number(currentModulo)
      if (!this.isGreaterInteger(lockState.updateParameters.privateKeySum, curMod)) {
        this.enableError(`Modulus is not larger than ${lockState.updateParameters.privateKeySum}!`)
      } else {
        // integer is greater.
        actions.ALLOW_NEXT_PAGE_ACTION();
        actions.UPDATE_MODULO_ACTION(curMod);
        Keyboard.dismiss()
      }
    }

  }

  validateMultiplier = () => {
    const { lockState, actions } = this.props;
    const { currentMultiplier } = this.state;

    let mod = Number(lockState.updateParameters.modulo)

    if (!this.isValidNumber(currentMultiplier)) {
      this.enableError("Non numeric multiplier received!")
    } else {
      let curMult = Number(currentMultiplier)

      if (!this.calculateGCD(mod, curMult)) {
        this.enableError(`GCD of ${mod} and ${curMult} is not 1!`)
      } else {
        // integer is greater.
        actions.ALLOW_NEXT_PAGE_ACTION();
        actions.UPDATE_MULTIPLIER_ACTION(curMult);
        // have to relock decryption to force them to generate pk and inverse again.
        actions.DECRYPT_LOCK_ACTION()
        actions.ENCRYPT_LOCK_ACTION()
        Keyboard.dismiss()
        this.setState({
          inverseLoaded: false,
          pkLoaded: false,
        })
      }
    }

  }
  computePublicKey = () => {
    const { lockState } = this.props;
    // for every element in the public key, multiply by the multiplier and get the remainder.
    let privateKey = lockState.updateParameters.privateKeyArr
    let modulo = lockState.updateParameters.modulo
    let multiplier = lockState.updateParameters.multiplier
    let newPk = []
    for (let i = 0; i < privateKey.length; i++) {
      let pub = (privateKey[i] * multiplier) % modulo
      newPk.push(pub);
    }
    return newPk;
  }

  loadInverse = () => {

    const { lockState, actions } = this.props;
    let currentInverse = this.xgcd(lockState.updateParameters.multiplier, lockState.updateParameters.modulo);
    actions.UPDATE_INVERSE_ACTION(currentInverse);
    actions.ALLOW_NEXT_PAGE_ACTION()
    // have to relock decryption to force them to generate pk and inverse again.
    actions.DECRYPT_LOCK_ACTION()
    actions.ENCRYPT_LOCK_ACTION()
    this.setState({
      inverseLoaded: true,
      pkLoaded: false,
    })

  }
  generatePubKey = () => {
    const { lockState, actions } = this.props;
    let pub = this.computePublicKey()
    actions.UPDATE_PUBLIC_KEY_ARRAY_ACTION(pub)
    actions.UPDATE_PUBLIC_KEY_STRING_ACTION(pub.join())
    actions.ALLOW_NEXT_PAGE_ACTION();
    // have to relock decryption to force them to generate pk and inverse again.
    actions.DECRYPT_LOCK_ACTION()
    actions.ENCRYPT_LOCK_ACTION()
    this.setState({
      pkLoaded: true,

    })
  }
  getSixthPage = () => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <Text style={styles.page1.textStyle}> Quiz Time</Text>
        <Text style={styles.page1.textStyle}> WIP</Text>
      </View>
    )
  }
  getFifthPage = () => {
    const { lockState, actions } = this.props;
    const { pkLoaded } = this.state;
    return (
      <View>
        <Text style={styles.page1.textStyleTitle}>Compute the <Text style={styles.page1.publicKeyStyle}>public key b</Text>:</Text>
        <Text style={styles.page1.textStyleHeader3}>
            <Text style={styles.page1.linkStyle} onPress={() => { this.setState({ showKeyMultiplicationInfoPopUp: true, }) }}>
              For every element in a, multiply it by the multiplier w you chose in step 3 and get the remainder
              when divided by the modulo m you chose in step 2
            </Text>
        </Text>
        <Text style={styles.page1.textStyleHeader3}>Example to be added later</Text>
        <Text style={styles.page1.textStyleHeader2}>
          <Text style={styles.page1.boldFont}>Private key <Text style={styles.page1.privateKeyStyle}>a</Text>: {lockState.updateParameters.privateKeyString}</Text>
        </Text>
        <Text style={styles.page1.textStyleHeader2}>
          <Text style={styles.page1.boldFont}>Multiplier <Text style={styles.page1.multiplierStyle}>w</Text>: {lockState.updateParameters.multiplier}</Text>
        </Text>
        <Text style={styles.page1.textStyleHeader2}>
          <Text style={styles.page1.boldFont}>Modulus <Text style={styles.page1.modulusStyle}>m</Text>: {lockState.updateParameters.modulo}</Text>
        </Text>
        <Text style={styles.page1.textStyleHeader2}>
          <Text style={styles.page1.boldFont}>Inverse multiplier <Text style={styles.page1.inverseStyle}>w^-1</Text>: {lockState.updateParameters.inverse}</Text>
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <CustomButton text="Gen Public Key" callback={() => { this.generatePubKey() }} />
        </View>

        {
          pkLoaded
            ? <Text style={styles.page1.textStyleHeader3}>Public key <Text style={styles.page1.publicKeyStyle}>b</Text>: {lockState.updateParameters.publicKeyString}</Text>
            : null
        }
      </View>
    )
  }
  getFourthPage = () => {
    const { lockState } = this.props;
    const { inverseLoaded } = this.state;
    return (
      <View>
        <Text style={styles.page1.textStyleTitle}>Calculate the multiplicative inverse of your multiplier <Text style={styles.page1.boldFont}>w ({lockState.updateParameters.multiplier})</Text>:</Text>
        <Text style={styles.page1.textStyleHeader3}>(Using Extended Euclidean's algorithm)</Text>
        <Text style={styles.page1.textStyleHeader2}>This is needed for decryption</Text>
        <Text style={styles.page1.textStyleHeader2}>E.G: Inverse of 11 mod 39 = 32 (32 --7 + 39)</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <CustomButton text="Gen Inverse" callback={() => { this.loadInverse() }} />
        </View>

        {
          inverseLoaded
            ?
            <Text style={styles.page1.textStyleTitle}>Multiplicative inverse of your multiplier <Text style={styles.page1.boldFont}>w ({lockState.updateParameters.multiplier})</Text>: {lockState.updateParameters.inverse}</Text>
            : null
        }
      </View>
    )
  }

  getThirdPage = () => {
    const { lockState } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.page1.textStyleTitle}>Choose your <Text style={styles.page1.multiplierStyle}>multiplier w</Text>:</Text>
          <Text style={styles.page1.textStyleHeader2}>
            This <Text style={styles.page1.multiplierStyle}>multiplier w</Text> must be
            a <Text style={styles.page1.linkStyle} onPress={() => { this.setState({ showCoprimeInfoPopUp: true, }) }}>
              co-prime
            </Text> to your <Text style={styles.page1.modulusStyle}>modulus m</Text>
          </Text>
          <Text style={styles.page1.textStyleHeader3}>
            This means <Text style={styles.page1.boldFont}>gcd({lockState.updateParameters.modulo},
            <Text style={styles.page1.multiplierStyle}>w</Text>)</Text> = 1
          </Text>
          <Text style={styles.page1.textStyleHeader2}>E.G: <Text style={styles.page1.boldFont}>w</Text> = 11, where <Text style={styles.page1.boldFont}>gcd (39,11)</Text> = 1</Text>
          <TextInput
            defaultValue={
              lockState.updateParameters.multiplier === 0 ?
                null :
                lockState.updateParameters.multiplier.toString()
            }
            onSubmitEditing={
              Keyboard.dismiss
            }
            keyboardType={'numeric'} style={styles.page1.textBoxStyle} onChangeText={(text) => {
              this.setState({ currentMultiplier: text })
            }} />
          <View style={styles.page1.buttonRow}>
            <CustomButton text="Validate" callback={this.validateMultiplier} />
          </View>
          {
            lockState.updateParameters.multiplier === 0 ?
              null :
              <Text style={styles.page1.textStyleHeader3}>Multiplier <Text style={styles.page1.multiplierStyle}>w: </Text>{lockState.updateParameters.multiplier.toString()}</Text>

          }
        </View>
      </TouchableWithoutFeedback>
    )
  }

  getSecondPage = () => {
    const { lockState } = this.props;
    console.log(lockState.updateParameters.modulo)
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.page1.textStyleTitle}>Choose your <Text style={styles.page1.modulusStyle}>modulus m</Text>:</Text>
          <Text style={styles.page1.textStyleHeader3}>Sum of <Text style={styles.page1.privateKeyStyle}>a</Text> is: {lockState.updateParameters.privateKeySum}</Text>
          <Text style={styles.page1.textStyleHeader2}>
            <Text style={styles.page1.linkStyle} onPress={() => { this.setState({ showModulusInfoPopUp: true, }) }}>
              m should be bigger than the sum of a
            </Text>
          </Text>
          
          <TextInput defaultValue={
            lockState.updateParameters.modulo === 0 ?
              null :
              lockState.updateParameters.modulo.toString()
          }
            onSubmitEditing={
              Keyboard.dismiss
            }
            keyboardType={'numeric'} style={styles.page1.textBoxStyle} onChangeText={(text) => {
              this.setState({ currentModulo: text })
            }} />
          <View style={styles.page1.buttonRow}>
            <CustomButton text="Validate" callback={this.validateModulus} />
          </View>
          {
            lockState.updateParameters.modulo === 0 ?
              null :
              <Text style={styles.page1.textStyleHeader3}>Modulus <Text style={styles.page1.modulusStyle}>m: </Text>{lockState.updateParameters.modulo.toString()}</Text>

          }
        </View>
      </TouchableWithoutFeedback>
    )
  }
  getFirstPage = () => {
    const { lockState } = this.props;
    let isEntered = lockState.lessonPageTabAndPages.allowNextPage

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.page1.textStyleTitle}>Enter your <Text style={styles.page1.privateKeyStyle}>private key a</Text>:</Text>
          <Text style={styles.page1.textStyleHeader1}>(This <Text style={styles.page1.privateKeyStyle}>private key a</Text> should be in a
              <Text
              style={styles.page1.linkStyle}
              onPress={() => {
                this.setState({
                  showSuperIncreasingInfoPopUp: true,
                })
              }}
            > super increasing sequence</Text>
            )
          </Text>
          <TextInput defaultValue={
            lockState.updateParameters.privateKeyString === ""
              ? null :
              lockState.updateParameters.privateKeyString
          } style={styles.page1.textBoxStyle} onChangeText={(text) => {
            this.setState({
              currentPrivateKey: text,
            })
          }}
            onSubmitEditing={
              Keyboard.dismiss
            }
          />
          <View style={styles.page1.buttonRow}>
            <CustomButton text="Validate" callback={this.validatePrivateKey} />
          </View>
          <Text style={styles.page1.textStyleHeader2}>
            Private key <Text style={styles.page1.privateKeyStyle}>a</Text>: {isEntered ? lockState.updateParameters.privateKeyString : null}
          </Text>
          <Text style={styles.page1.textStyleHeader2}>
            Knapsack Size <Text style={styles.page1.boldFont}>n</Text>: {
              isEntered
                ? lockState.updateParameters.privateKeyArr.length
                : null
            }
          </Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  checkPageNo = () => {
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  }

  getProgressImage = () => {
    let pageNo = this.checkPageNo()
    switch (pageNo) {
      case 1: return ProgressBar1;
      case 2: return ProgressBar2;
      case 3: return ProgressBar3;
      case 4: return ProgressBar4;
      case 5: return ProgressBar5;
      default: return ProgressBar1;
    }
  }

  getPageElements = () => {
    let pageNo = this.checkPageNo()
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
      default:
        return this.getFirstPage();
    }
  }
  render() {
    const {
      showError,
      errorMessage,
      showSuperIncreasingInfoPopUp,
      showModulusInfoPopUp,
      showCoprimeInfoPopUp,
      showKeyMultiplicationInfoPopUp,
      keyboardVisiblity
    } = this.state;
    let pageNo = this.checkPageNo()
    return (
      <View style={styles.page1.learnTabPad}>
        {
          showKeyMultiplicationInfoPopUp
            ? <AlertPopUp
              icon={Alert}
              renderedBlocks={this.keyMultiplicationInfoPopUp()}
              callback={() => { this.setState({ showKeyMultiplicationInfoPopUp: false, }) }}
              visibility={showKeyMultiplicationInfoPopUp} />
            : null
        }
        {
          showCoprimeInfoPopUp
            ? <AlertPopUp
              icon={Alert}
              renderedBlocks={this.superCoprimeInfoPopUp()}
              callback={() => { this.setState({ showCoprimeInfoPopUp: false, }) }}
              visibility={showCoprimeInfoPopUp} />
            : null
        }
        {
          showSuperIncreasingInfoPopUp
            ? <AlertPopUp
              icon={Alert}
              renderedBlocks={this.superIncreasingInfoPopUp()}
              callback={() => { this.setState({ showSuperIncreasingInfoPopUp: false, }) }}
              visibility={showSuperIncreasingInfoPopUp} />
            : null
        }
        {
          showModulusInfoPopUp
            ? <AlertPopUp
              icon={Alert}
              renderedBlocks={this.modulusInfoPopUp()}
              callback={() => { this.setState({ showModulusInfoPopUp: false, }) }}
              visibility={showModulusInfoPopUp} />
            : null
        }
        {
          showError ?
            <PopUp visibility={showError} close={this.disableError} message={errorMessage} icon={Error} />
            : null
        }
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {
              keyboardVisiblity
                ? null
                : (
                  <>
                    <View style={styles.page1.textStyleTitleWrapper}>
                      <Text style={styles.page1.textStyleTitleCenter}>Key Generation</Text>

                    </View>
                    <View style={{ alignItems: 'center' }}>

                      {
                        pageNo <= 5 ?
                          <Image style={styles.page1.progressBarSize} source={this.getProgressImage()}></Image> :
                          null
                      }
                    </View>
                  </>
                )
            }
          </View>

        </TouchableWithoutFeedback>
        {
          this.getPageElements()
        }

      </View>
    );
  }

}

const mapStateToProps = state => ({
  lockState: state
})


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
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
  }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(KeyPage);