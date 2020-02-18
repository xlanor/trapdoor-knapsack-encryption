/* eslint-disable no-param-reassign */
import React, { Component } from 'react';

import { View, Text, Clipboard, Image, TouchableOpacity, TextInput, Share, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'react-proptypes';
import CustomButton from '../../../Common/Button';

// begin redux imports

import {
  UPDATE_SIMULATOR_PRIVATE_KEY_ACTION,
  UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION,
  UPDATE_SIMULATOR_MODULO_ACTION,
  UPDATE_SIMULATOR_MODULO_VALID_ACTION,
  UPDATE_SIMULATOR_PUBLIC_KEY_ACTION,
  UPDATE_SIMULATOR_GEN_KEY_COMPLETED_ACTION,
  UPDATE_SIMULATOR_TEXT_TO_ENC_ACTION,
  UPDATE_SIMULATOR_TEXT_TO_ENC_VALID_ACTION,
  UPDATE_SIMULATOR_TEXT_TO_DECRYPT_ACTION,
  UPDATE_SIMULATOR_DECRYPTED_TEXT_ACTION,
  UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION,
  UPDATE_SIMULATOR_MULTIPLIER_ACTION,
  UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION,
  UPDATE_SIMULATOR_PADDING_ACTION,
  UPDATE_SIMULATOR_RESET_ENC_ACTION,
  UPDATE_SIMULATOR_RESET_DEC_ACTION,
} from '../../../../redux-modules/actions/simulators';

import {
  UNLOCK_TROPHY_KEYMASTER,
  UNLOCK_TROPHY_SAFETY_FIRST,
  UNLOCK_TROPHY_BREAK_WALL,
  SHOW_TROPHY_ACTION,
} from '../../../../redux-modules/actions/manageTrophies';

import Error from '../../../../assets/images/Error.png';
import EditButton from '../../../../assets/images/EditButton.png';
import Copy from '../../../../assets/images/Copy.png';
import Success from '../../../../assets/images/success.png';
import ShareButton from '../../../../assets/images/Share.png';

import PopUp from '../../../Common/PopUp';
import AlertPopUp from '../../../Common/AlertPopUp';

// import stylesheet.
import styles from './styles';

class SimulatorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSimulatorPage: 'menu', // menu by default.
      currentPrivateKeyInput: '',
      currentModulusInput: '',
      currentMultiplierInput: '',
      showError: false,
      errorMessage: '',
      currentPlainTextInput: '',
      encryptedOutput: [],
      currentEncryptedTextInput: '',
      currentPaddingInput: '',
      decrypted: '',
      showAlertPopUp: false,
      alertPopUpMessage: '',
      localPublicKey: '',
      localPublicKeyValid: false,
    };
  }

  convertBinToText = binaryString => {
    const dec = [];
    // characters are done in blocks of 8.
    for (let i = 0; i <= binaryString.length - 8; i += 8) {
      const ascii = parseInt(binaryString.substring(i, i + 8), 2);
      dec.push(String.fromCharCode(ascii));
    }
    return decodeURIComponent(escape(dec.join('')));
  };

  removePadding = (binStringList, padNumber) => {
    const binString = binStringList.join('');
    if (padNumber !== 0) {
      return binString.substring(0, binString.length - padNumber);
    }

    return binString;
  };

  sumReducer = (accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue);
  };

  isEmptyInput = textToCheck => {
    console.log(`Received Text to check ${textToCheck}`);
    if (typeof textToCheck === 'undefined') return true;
    return textToCheck.trim() === '';
  };

  isValidNumber = stringToVerify => {
    const str = String(stringToVerify);
    const reg = new RegExp('^[0-9]+$');
    return str.match(reg) !== null;
  };

  isGreaterInteger = (a, b) => {
    return a < b;
  };

  isGreater = (a, b, idx) => {
    // returns true by default if idx is 0, if not whether a > b.
    return idx === 0 ? true : a < b;
  };

  setCurrentSimulatorPage = curPage => {
    this.setState({
      currentSimulatorPage: curPage,
    });
  };

  enableError = message => {
    this.setState({
      showError: true,
      errorMessage: message,
    });
  };

  disableError = () => {
    this.setState({
      showError: false,
      errorMessage: '',
    });
  };

  onShare = typeToShare => {
    const { publicKey, padding } = this.props;
    const { encryptedOutput } = this.state;
    // Here is the Share API
    switch (typeToShare) {
      case 'Public Key':
        Share.share({
          message: `Public Key: ${publicKey.join(',')}`,
        })
          // after successful share return result
          .then(result => console.log(result))
          // If any thing goes wrong it comes here
          .catch(errorMsg => console.log(errorMsg));
        break;
      case 'Ciphertext':
        Share.share({
          message: `Encrypted Text: ${encryptedOutput.join(',')}`,
        })
          // after successful share return result
          .then(result => console.log(result))
          // If any thing goes wrong it comes here
          .catch(errorMsg => console.log(errorMsg));
        break;
      case 'Padding':
        Share.share({
          message: `Padding: ${padding}`,
        })
          // after successful share return result
          .then(result => console.log(result))
          // If any thing goes wrong it comes here
          .catch(errorMsg => console.log(errorMsg));
        break;
      default:
        break;
    }
  };

  getNumericFromString = delimitedByComma => {
    // ONLY use this if you have validated the string!
    return delimitedByComma.split(',').map(x => {
      return Number(x);
    });
  };

  computePublicKey = () => {
    const { actions, trophyKeymaster, privateKey, modulus, multiplier, genKeyCompleted } = this.props;
    // for every element in the public key, multiply by the multiplier and get the remainder.
    const localPrivateKey = privateKey.split(',');
    const newPk = [];
    console.log(`Modulo ${modulus} Multiplier ${multiplier} Private Key ${localPrivateKey}`);
    for (let i = 0; i < localPrivateKey.length; i += 1) {
      const pub = (localPrivateKey[i] * multiplier) % modulus;
      newPk.push(pub);
    }
    if (!genKeyCompleted) {
      actions.UPDATE_SIMULATOR_PUBLIC_KEY_ACTION(newPk);
      if (!trophyKeymaster) {
        actions.UNLOCK_TROPHY_KEYMASTER();
        actions.SHOW_TROPHY_ACTION();
      }
    }
  };

  xgcd = (inputA, inputM) => {
    // validate inputs
    // eslint-disable-next-line prefer-const
    let [a, m] = [Number(inputA), Number(inputM)];
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
    return multiplier === 1;
  };

  getBinaryOfInput = textToGet => {
    const utf8 = unescape(encodeURIComponent(textToGet));
    return Array.from(utf8)
      .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
      .map(bin => '0'.repeat(8 - bin.length) + bin)
      .join('');
  };

  generateBinaryBlocks = (binaryString, localPubNumeric) => {
    const binUserInput = binaryString;
    const binPubKeyArr = localPubNumeric;
    console.log(`localPubKey ${localPubNumeric}`);
    console.log(`local PK len ${localPubNumeric.length}`);
    const binaryBlocks = this.chunk(binUserInput, binPubKeyArr.length);
    return binaryBlocks;
  };

  getBinaryString = (knapsack, yVal) => {
    const binList = [];
    yVal.forEach(y => {
      let binaryStr = '';
      for (let i = knapsack.length - 1; i >= 0; i -= 1) {
        if (y >= knapsack[i]) {
          binaryStr = `1${binaryStr}`;
          y -= knapsack[i];
        } else {
          binaryStr = `0${binaryStr}`;
        }
      }
      binList.push(binaryStr);
    });
    return binList;
  };

  chunk = (binaryString, trapdoorSize) => {
    const { actions } = this.props;
    const binBlocks = [];
    const upper = binaryString.length - trapdoorSize;
    console.log(`Upper limit ${upper}`);
    console.log(`Trapdoor size:${trapdoorSize}`);
    for (let i = 0; i <= upper; i += trapdoorSize) {
      binBlocks.push(binaryString.substring(i, i + trapdoorSize));
    }
    // need to pad
    if (binaryString.length % trapdoorSize !== 0) {
      const padding = trapdoorSize - (binaryString.length % trapdoorSize);
      const start = binaryString.length - (binaryString.length % trapdoorSize);
      let blockStr = binaryString.substring(start);
      console.log(`Padding to ${padding}`);
      for (let j = 0; j < padding; j += 1) {
        blockStr += '0';
      }
      binBlocks.push(blockStr);
      actions.UPDATE_SIMULATOR_PADDING_ACTION(padding);
    }
    const binBlocksNumeric = [];
    for (let i = 0; i < binBlocks.length; i += 1) {
      // for each number string inside bin blocks, cast it to an array of numbers.
      console.log(binBlocks[i]);
      const binLen = binBlocks[i].length;
      const numeric = binBlocks[i].split('').map(Number);
      let differential = binLen - numeric.length;
      while (differential !== 0) {
        numeric.unshift(0); // prepends
        differential -= 1;
      }
      binBlocksNumeric.push(numeric);
    }
    return binBlocksNumeric;
  };

  validateNumeric = numericString => {
    // splits the numeric.
    const splitKey = numericString.split(',');
    for (let i = 0; i < splitKey.length; i += 1) {
      const checkNum = this.isValidNumber(splitKey[i]);
      if (!checkNum) {
        return false;
      }
    }
    return true;
  };

  validateSuperIncreasing = (total, numericString) => {
    // splits the private key.
    const splitKey = numericString.split(',');
    let currentMax = 0;
    for (let i = 0; i < splitKey.length; i += 1) {
      const curNo = Number(splitKey[i]);
      const checkSuperIncreasing = this.isGreater(currentMax, curNo, i);
      if (checkSuperIncreasing) {
        currentMax += curNo;
      } else {
        return false;
      }
    }
    total.size = splitKey.length - 1;
    total.total = currentMax;
    total.arrOfVals = splitKey;
    return true;
  };

  validateLocalPublicKey = () => {
    const { localPublicKey } = this.state;
    console.log(`Checking ${localPublicKey}`);
    if (!this.validateNumeric(localPublicKey)) {
      this.enableError('Non numeric message received!');
    } else {
      this.setState(() => ({
        localPublicKeyValid: true,
      }));
    }
  };

  validateCurrentPrivateKey = () => {
    const { actions } = this.props;
    const { currentPrivateKeyInput } = this.state;
    if (!this.validateNumeric(currentPrivateKeyInput)) {
      this.enableError('Non numeric message received!');
      actions.UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION(false);
    } else {
      // check if it is superincreasing
      const total = { total: 0, size: 0, arrOfVals: [] }; // create object to pass by reference1
      if (!this.validateSuperIncreasing(total, currentPrivateKeyInput)) {
        this.enableError('Sequence is not superincreasing!');
        actions.UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION(false);
      } else {
        // sets the state.
        actions.UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION(total.total);
        actions.UPDATE_SIMULATOR_PRIVATE_KEY_ACTION(currentPrivateKeyInput);
      }
    }
  };

  validateCurrentModulus = () => {
    const { actions, privateKeySum } = this.props;
    const { currentModulusInput } = this.state;
    if (!this.validateNumeric(currentModulusInput)) {
      this.enableError('Non numeric modulo received!');
      actions.UPDATE_SIMULATOR_MODULO_VALID_ACTION(false);
    } else {
      // check if is bigger
      const curMod = Number(currentModulusInput);
      if (!this.isGreaterInteger(privateKeySum, curMod)) {
        this.enableError(`Modulus is not larger than ${privateKeySum}!`);
        actions.UPDATE_SIMULATOR_MODULO_VALID_ACTION(false);
      } else {
        // integer is greater.
        actions.UPDATE_SIMULATOR_MODULO_ACTION(curMod);
      }
    }
  };

  validateCurrentMultiplier = () => {
    const { actions, modulus } = this.props;
    const { currentMultiplierInput } = this.state;
    const mod = Number(modulus);

    if (!this.validateNumeric(currentMultiplierInput)) {
      this.enableError('Non numeric multiplier received!');
      actions.UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION(false);
    } else {
      const curMult = Number(currentMultiplierInput);

      if (!this.calculateGCD(mod, curMult)) {
        this.enableError(`GCD of ${mod} and ${curMult} is not 1!`);
        actions.UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION(false);
      } else {
        console.log(`Dispatching ${curMult}`);
        actions.UPDATE_SIMULATOR_MULTIPLIER_ACTION(curMult);
      }
    }
  };

  validateEncryptionText = () => {
    const { trophySafetyFirst, actions } = this.props;
    const { currentPlainTextInput, localPublicKey } = this.state;
    if (this.isEmptyInput(currentPlainTextInput)) {
      this.enableError('Input cannot be empty!');
    } else {
      const binString = this.getBinaryOfInput(currentPlainTextInput);
      console.log(`binString ${binString}`);
      const localPubNumeric = this.getNumericFromString(localPublicKey);
      const binBlocks = this.generateBinaryBlocks(binString, localPubNumeric);
      const encryptedArr = [];
      // eslint-disable-next-line array-callback-return
      binBlocks.map((block, idx) => {
        console.log(`BLOCK ${idx} - ${block}`);
        encryptedArr.push(
          block.map((x, index) => {
            console.log(`${localPubNumeric[index]} -${x}`);
            return Number(localPubNumeric[index]) * Number(x);
          }),
        );
      });
      for (let i = 0; i < encryptedArr.length; i += 1) {
        encryptedArr[i] = encryptedArr[i].reduce(this.sumReducer);
      }
      this.setState(
        {
          encryptedOutput: encryptedArr,
        },
        () => {
          if (!trophySafetyFirst) {
            actions.UNLOCK_TROPHY_SAFETY_FIRST();
            actions.SHOW_TROPHY_ACTION();
          }
        },
      );
    }
  };

  validateDecryptionText = () => {
    const { actions, trophyBreakWall, privateKey, modulus, multiplier } = this.props;
    const { currentEncryptedTextInput, currentPaddingInput } = this.state;

    if (this.isEmptyInput(currentEncryptedTextInput)) {
      this.enableError('Encrypted Input cannot be empty!');
    } else if (!this.validateNumeric(currentEncryptedTextInput)) {
      // check if they are valid numbers.
      this.enableError('Text input is NOT numeric!');
    } else if (!this.isValidNumber(currentPaddingInput)) {
      this.enableError('Padding is not a numerical value!');
    } else if (this.isEmptyInput(currentPaddingInput)) {
      this.enableError('Padding Input cannot be empty!');
    } else {
      const padding = Number(currentPaddingInput);
      console.log(`Current padding input: ${padding}`);
      // convert the text to an array of numbers.
      const encryptedNumberArray = currentEncryptedTextInput
        .replace(/, +/g, ',')
        .split(',')
        .map(Number);
      const decrypted = [];
      // compute the current inverse
      const currentInverse = this.xgcd(multiplier, modulus);
      encryptedNumberArray.forEach(enc => {
        const multiplied = enc * currentInverse;
        const modVal = multiplied % modulus;
        decrypted.push(modVal);
      });
      // convert private key to an array of numbers
      const privateKeyArr = privateKey
        .replace(/, +/g, ',')
        .split(',')
        .map(Number);
      const binStringList = this.getBinaryString(privateKeyArr, decrypted);
      console.log(binStringList);

      const unpadded = this.removePadding(binStringList, padding);
      console.log(unpadded);
      const dec = this.convertBinToText(unpadded);
      console.log(`dec: ${dec} Length: ${dec.length}`);
      // Wrong prikey -> dec == " " & dec.length == 1
      // binstring == all 0s -> dec =="" & dec.length == 0
      const pattern = /^\0*\0$/g;
      if (!dec || dec.trim().length === 0 || pattern.test(dec)) {
        this.enableError(
          'Unable to map the decryption result to the proper ascii value! \nMight be decrypting with wrong key!',
        );
      } else {
        this.setState(
          {
            decrypted: dec,
          },
          () => {
            if (!trophyBreakWall) {
              actions.UNLOCK_TROPHY_BREAK_WALL();
              actions.SHOW_TROPHY_ACTION();
            }
          },
        );
      }
    }
  };

  encryptionPage = () => {
    const { actions, padding } = this.props;
    const { encryptedOutput, localPublicKeyValid, localPublicKey } = this.state;
    console.log(`Local Public Key: ${localPublicKeyValid}`);
    return (
      <>
        <Text
          style={{
            marginTop: Dimensions.get('screen').height * 0.01,
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'comfortaa',
            textDecorationLine: 'underline',
          }}
        >
          Encryption
        </Text>
        {!localPublicKeyValid ? (
          <View style={styles.SimulatorPage.rowKeyGen}>
            <Text style={styles.SimulatorPage.textStyleRow}>Enter your public key: </Text>
            <TextInput
              style={{
                ...styles.SimulatorPage.textStyleInput,
                ...styles.SimulatorPage.roundLeftCorner,
                ...styles.SimulatorPage.roundRightCorner,
              }}
              onChangeText={text => {
                this.setState({
                  localPublicKey: text,
                });
              }}
            />
            <View style={styles.SimulatorPage.genKeyButtonView}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.SimulatorPage.multipleButtonLeft}>
                  <CustomButton
                    text="Menu"
                    callback={() => {
                      this.setState({ currentSimulatorPage: 'menu' });
                    }}
                    buttonColor="blue"
                  />
                </View>
                <View style={styles.SimulatorPage.multipleButtonRight}>
                  <CustomButton
                    text="Validate"
                    callback={() => {
                      this.validateLocalPublicKey();
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : encryptedOutput.length === 0 ? (
          <View style={styles.SimulatorPage.rowKeyGen}>
            <Text style={styles.SimulatorPage.textStyleRow}>Using public key: </Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInputUneditable,
                  ...styles.SimulatorPage.roundLeftCorner,
                }}
                editable={false}
              >
                {localPublicKey}
              </TextInput>
              <View style={styles.SimulatorPage.imageButtonStyle}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      localPublicKey: '',
                      localPublicKeyValid: false,
                    });
                  }}
                >
                  <Image style={styles.SimulatorPage.copyStyle} source={EditButton} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.SimulatorPage.imageButtonStyle,
                  ...styles.SimulatorPage.roundRightCorner,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(localPublicKey);
                    this.setState({
                      showAlertPopUp: true,
                      alertPopUpMessage: 'Successfully copied your public key to your clipboard!',
                    });
                  }}
                >
                  <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.SimulatorPage.textStyleRow}>Enter your string to encrypt: </Text>
            <TextInput
              style={{
                ...styles.SimulatorPage.textStyleInput,
                ...styles.SimulatorPage.roundLeftCorner,
                ...styles.SimulatorPage.roundRightCorner,
              }}
              onChangeText={text => {
                this.setState({
                  currentPlainTextInput: text,
                });
              }}
            />

            <View style={styles.SimulatorPage.genKeyButtonView}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.SimulatorPage.multipleButtonLeft}>
                  <CustomButton
                    text="Menu"
                    callback={() => {
                      this.setState({
                        currentSimulatorPage: 'menu',
                      });
                    }}
                    buttonColor="blue"
                  />
                </View>
                <View style={styles.SimulatorPage.multipleButtonRight}>
                  <CustomButton
                    text="Encrypt"
                    callback={() => {
                      this.validateEncryptionText();
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Ciphertext</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    ...styles.SimulatorPage.textStyleInputUneditable,
                    ...styles.SimulatorPage.roundLeftCorner,
                  }}
                  editable={false}
                >
                  {encryptedOutput.join(',')}
                </TextInput>

                <View style={styles.SimulatorPage.imageButtonStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onShare('Ciphertext');
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={ShareButton} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...styles.SimulatorPage.imageButtonStyle,
                    ...styles.SimulatorPage.roundRightCorner,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Clipboard.setString(encryptedOutput.join(','));
                      this.setState({
                        showAlertPopUp: true,
                        alertPopUpMessage: 'Successfully copied the encrypted string to your clipboard!',
                      });
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Padding:</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    ...styles.SimulatorPage.textStyleInputUneditable,
                    ...styles.SimulatorPage.roundLeftCorner,
                  }}
                  editable={false}
                >
                  {padding}
                </TextInput>
                <View
                  style={{
                    ...styles.SimulatorPage.imageButtonStyle,
                    ...styles.SimulatorPage.roundRightCorner,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.onShare('Padding');
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={ShareButton} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.SimulatorPage.genKeyButtonView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={styles.SimulatorPage.multipleButtonLeft}>
                    <CustomButton
                      text="Menu"
                      callback={() => {
                        this.setState({ currentSimulatorPage: 'menu' });
                      }}
                      buttonColor="blue"
                    />
                  </View>
                  <View style={styles.SimulatorPage.multipleButtonRight}>
                    <CustomButton
                      text="Clear"
                      callback={() => {
                        actions.UPDATE_SIMULATOR_RESET_ENC_ACTION();
                        this.setState({
                          currentPlainTextInput: '',
                          currentPaddingInput: '',
                          encryptedOutput: [],
                        });
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </>
    );
  };

  decryptionPage = () => {
    const { decrypted } = this.state;
    const { actions } = this.props;
    return (
      <>
        <Text
          style={{
            marginTop: Dimensions.get('screen').height * 0.01,
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'comfortaa',
            textDecorationLine: 'underline',
          }}
        >
          Decryption
        </Text>
        {decrypted === '' ? (
          <>
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Enter your ciphertext: </Text>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInput,
                  ...styles.SimulatorPage.roundLeftCorner,
                  ...styles.SimulatorPage.roundRightCorner,
                }}
                onChangeText={text => {
                  this.setState({
                    currentEncryptedTextInput: text,
                  });
                }}
              />
            </View>
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Enter padding:</Text>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInput,
                  ...styles.SimulatorPage.roundLeftCorner,
                  ...styles.SimulatorPage.roundRightCorner,
                }}
                onChangeText={text => {
                  this.setState({
                    currentPaddingInput: text,
                  });
                }}
              />
              <View style={styles.SimulatorPage.genKeyButtonView}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.SimulatorPage.multipleButtonLeft}>
                    <CustomButton
                      text="Menu"
                      callback={() => {
                        this.setState({ currentSimulatorPage: 'menu' });
                      }}
                      buttonColor="blue"
                    />
                  </View>
                  <View style={styles.SimulatorPage.multipleButtonRight}>
                    <CustomButton
                      text="Decrypt"
                      callback={() => {
                        try {
                          this.validateDecryptionText();
                        } catch (e) {
                          console.log(e);
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  ...styles.SimulatorPage.textStyleRow,
                  ...styles.SimulatorPage.rowKeyGen,
                }}
              >
                Note: Decryption will use your secret key as given in key generation page
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Decrypted Text:</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    ...styles.SimulatorPage.textStyleInputUneditable,
                    ...styles.SimulatorPage.roundLeftCorner,
                  }}
                  editable={false}
                >
                  {decrypted}
                </TextInput>
                <View
                  style={{
                    ...styles.SimulatorPage.imageButtonStyle,
                    ...styles.SimulatorPage.roundRightCorner,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Clipboard.setString(decrypted);
                      this.setState({
                        showAlertPopUp: true,
                        alertPopUpMessage: 'Successfully copied the plaintext to your clipboard!',
                      });
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.SimulatorPage.genKeyButtonView}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.SimulatorPage.multipleButtonLeft}>
                  <CustomButton
                    text="Menu"
                    callback={() => {
                      this.setState({ currentSimulatorPage: 'menu' });
                    }}
                    buttonColor="blue"
                  />
                </View>
                <View style={styles.SimulatorPage.multipleButtonRight}>
                  <CustomButton
                    text="Clear"
                    callback={() => {
                      this.setState({
                        currentEncryptedTextInput: '',
                        decrypted: '',
                        currentPaddingInput: '0',
                      });
                      actions.UPDATE_SIMULATOR_RESET_DEC_ACTION();
                    }}
                  />
                </View>
              </View>
            </View>
          </>
        )}
      </>
    );
  };

  keyGenerationPage = () => {
    const {
      actions,

      publicKey,
      privateKey,
      modulus,
      multiplier,
      privateKeyValid,
      modulusValid,
      multiplierValid,
    } = this.props;
    return (
      <>
        <Text
          style={{
            marginTop: Dimensions.get('screen').height * 0.01,
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'comfortaa',
            textDecorationLine: 'underline',
          }}
        >
          Key Generation
        </Text>
        {privateKeyValid ? (
          <View style={styles.SimulatorPage.rowKeyGen}>
            <Text style={styles.SimulatorPage.textStyleRow}>Private Key: </Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInputUneditable,
                  ...styles.SimulatorPage.roundLeftCorner,
                }}
                editable={false}
              >
                {privateKey}
              </TextInput>
              <View style={styles.SimulatorPage.imageButtonStyle}>
                <TouchableOpacity
                  onPress={() => {
                    actions.UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION(false);
                  }}
                >
                  <Image style={styles.SimulatorPage.copyStyle} source={EditButton} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.SimulatorPage.imageButtonStyle,
                  ...styles.SimulatorPage.roundRightCorner,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(privateKey);
                    this.setState({
                      showAlertPopUp: true,
                      alertPopUpMessage: 'Successfully copied the private key to your clipboard!',
                    });
                  }}
                >
                  <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.SimulatorPage.rowKeyGen}>
            <Text style={styles.SimulatorPage.textStyleRow}>Enter your private key: </Text>
            <TextInput
              style={{
                ...styles.SimulatorPage.textStyleInput,
                ...styles.SimulatorPage.roundRightCorner,
                ...styles.SimulatorPage.roundLeftCorner,
              }}
              onChangeText={text => {
                this.setState({
                  currentPrivateKeyInput: text,
                });
              }}
            />
            <View style={styles.SimulatorPage.genKeyButtonView}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.SimulatorPage.multipleButtonLeft}>
                  <CustomButton
                    text="Menu"
                    callback={() => {
                      this.setState({ currentSimulatorPage: 'menu' });
                    }}
                    buttonColor="blue"
                  />
                </View>
                <View style={styles.SimulatorPage.multipleButtonRight}>
                  <CustomButton
                    text="Validate"
                    callback={() => {
                      this.validateCurrentPrivateKey();
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
        {privateKeyValid ? (
          modulusValid ? (
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Modulus:</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    ...styles.SimulatorPage.textStyleInputUneditable,
                    ...styles.SimulatorPage.roundLeftCorner,
                  }}
                  editable={false}
                >
                  {modulus}
                </TextInput>
                <View style={styles.SimulatorPage.imageButtonStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      actions.UPDATE_SIMULATOR_MODULO_VALID_ACTION(false);
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={EditButton} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...styles.SimulatorPage.imageButtonStyle,
                    ...styles.SimulatorPage.roundRightCorner,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Clipboard.setString(modulus.toString());
                      this.setState({
                        showAlertPopUp: true,
                        alertPopUpMessage: 'Successfully copied the modulus to your clipboard!',
                      });
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Choose your modulus:</Text>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInput,
                  ...styles.SimulatorPage.roundRightCorner,
                  ...styles.SimulatorPage.roundLeftCorner,
                }}
                keyboardType="numeric"
                onChangeText={text => {
                  this.setState({
                    currentModulusInput: text,
                  });
                }}
              />
              <View style={styles.SimulatorPage.genKeyButtonView}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.SimulatorPage.multipleButtonLeft}>
                    <CustomButton
                      text="Menu"
                      callback={() => {
                        this.setState({ currentSimulatorPage: 'menu' });
                      }}
                      buttonColor="blue"
                    />
                  </View>
                  <View style={styles.SimulatorPage.multipleButtonRight}>
                    <CustomButton
                      text="Validate"
                      callback={() => {
                        this.validateCurrentModulus();
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )
        ) : null}
        {modulusValid && privateKeyValid ? (
          multiplierValid ? (
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Multiplier:</Text>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{
                    ...styles.SimulatorPage.textStyleInputUneditable,
                    ...styles.SimulatorPage.roundLeftCorner,
                  }}
                  keyboardType="numeric"
                  editable={false}
                >
                  {multiplier}
                </TextInput>
                <View style={styles.SimulatorPage.imageButtonStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      actions.UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION(false);
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={EditButton} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...styles.SimulatorPage.imageButtonStyle,
                    ...styles.SimulatorPage.roundRightCorner,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      Clipboard.setString(multiplier.toString());
                      this.setState({
                        showAlertPopUp: true,
                        alertPopUpMessage: 'Successfully copied the multiplier to your clipboard!',
                      });
                    }}
                  >
                    <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.SimulatorPage.rowKeyGen}>
              <Text style={styles.SimulatorPage.textStyleRow}>Choose your multiplier:</Text>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInput,
                  ...styles.SimulatorPage.roundRightCorner,
                  ...styles.SimulatorPage.roundLeftCorner,
                }}
                onChangeText={text => {
                  this.setState({
                    currentMultiplierInput: text,
                  });
                }}
              />
              <View style={styles.SimulatorPage.genKeyButtonView}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.SimulatorPage.multipleButtonLeft}>
                    <CustomButton
                      text="Menu"
                      callback={() => {
                        this.setState({ currentSimulatorPage: 'menu' });
                      }}
                      buttonColor="blue"
                    />
                  </View>
                  <View style={styles.SimulatorPage.multipleButtonRight}>
                    <CustomButton
                      text="Validate"
                      callback={() => {
                        this.validateCurrentMultiplier();
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )
        ) : null}
        {modulusValid && privateKeyValid && multiplierValid ? (
          <View style={styles.SimulatorPage.rowKeyGen}>
            {this.computePublicKey()}
            <Text style={styles.SimulatorPage.textStyleRow}>Public Key:</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={{
                  ...styles.SimulatorPage.textStyleInputUneditable,
                  ...styles.SimulatorPage.roundLeftCorner,
                }}
                editable={false}
              >
                {typeof publicKey === 'object' ? publicKey.join(', ') : null}
              </TextInput>
              <View style={styles.SimulatorPage.imageButtonStyle}>
                <TouchableOpacity
                  onPress={() => {
                    this.onShare('Public Key');
                  }}
                >
                  <Image style={styles.SimulatorPage.copyStyle} source={ShareButton} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.SimulatorPage.imageButtonStyle,
                  ...styles.SimulatorPage.roundRightCorner,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(typeof publicKey === 'object' ? publicKey.join(',') : null);

                    this.setState({
                      showAlertPopUp: true,
                      alertPopUpMessage: 'Successfully copied the public key to your clipboard!',
                    });
                  }}
                >
                  <Image style={styles.SimulatorPage.copyStyle} source={Copy} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.SimulatorPage.genKeyButtonView}>
              <CustomButton
                text="Menu"
                callback={() => {
                  this.setState({ currentSimulatorPage: 'menu' });
                }}
                buttonColor="blue"
              />
            </View>
          </View>
        ) : null}
      </>
    );
  };

  mainMenu = () => {
    const { genKeyCompleted } = this.props;
    return (
      // Don't anyhow remove empty views, they are there to provide flex.
      <>
        <View style={styles.SimulatorPage.rowView}>
          <CustomButton
            callback={() => {
              this.setState({ currentSimulatorPage: 'genkey' });
            }}
            text="KeyGen"
          />
        </View>
        {genKeyCompleted ? (
          <>
            <View style={styles.SimulatorPage.rowView}>
              <CustomButton
                callback={() => {
                  this.setCurrentSimulatorPage('encrypt');
                }}
                text="Encrypt"
              />
            </View>
            <View style={styles.SimulatorPage.rowView}>
              <CustomButton
                callback={() => {
                  this.setCurrentSimulatorPage('decrypt');
                }}
                text="Decrypt"
              />
            </View>
          </>
        ) : null}
      </>
    );
  };

  getCurrentPage = () => {
    const { currentSimulatorPage } = this.state;
    switch (currentSimulatorPage) {
      case 'genkey':
        return this.keyGenerationPage();
      case 'encrypt':
        return this.encryptionPage();
      case 'decrypt':
        return this.decryptionPage();
      default:
        return this.mainMenu();
    }
  };

  render() {
    const { errorMessage, showError, showAlertPopUp, alertPopUpMessage } = this.state;
    const { publicKey } = this.props;
    console.log(`PUB KEY ${publicKey}`);
    setTimeout(() => {
      if (showAlertPopUp) this.setState({ showAlertPopUp: false, alertPopUpMessage: '' });
    }, 3000);
    return (
      <View style={{ ...styles.SimulatorPage.learnTabPad }}>
        {showAlertPopUp ? (
          <AlertPopUp
            icon={Success}
            messageContent={alertPopUpMessage}
            callback={() => this.setState({ showAlertPopUp: false, alertPopUpMessage: '' })}
            visibility={showAlertPopUp}
          />
        ) : null}
        {showError ? (
          <PopUp visibility={showError} close={this.disableError} message={errorMessage} icon={Error} />
        ) : null}
        <Text style={styles.SimulatorPage.textStyleTitle}>Trapdoor Knapsack Simulator</Text>
        {this.getCurrentPage()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  privateKeyValid: state.simulator.privateKeyValid,
  modulusValid: state.simulator.modulusValid,
  multiplierValid: state.simulator.multiplierValid,
  privateKeySum: state.simulator.privateKeySum,
  padding: state.simulator.padding,
  publicKey: state.simulator.publicKey,
  privateKey: state.simulator.privateKey,
  modulus: state.simulator.modulus,
  multiplier: state.simulator.multiplier,
  genKeyCompleted: state.simulator.genKeyCompleted,
  trophyKeymaster: state.trophy.trophyKeymaster,
  trophySafetyFirst: state.trophy.trophySafetyFirst,
  trophyBreakWall: state.trophy.trophyBreakWall,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      UPDATE_SIMULATOR_PRIVATE_KEY_ACTION,
      UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION,
      UPDATE_SIMULATOR_MODULO_ACTION,
      UPDATE_SIMULATOR_MODULO_VALID_ACTION,
      UPDATE_SIMULATOR_PUBLIC_KEY_ACTION,
      UPDATE_SIMULATOR_GEN_KEY_COMPLETED_ACTION,
      UPDATE_SIMULATOR_TEXT_TO_ENC_ACTION,
      UPDATE_SIMULATOR_TEXT_TO_ENC_VALID_ACTION,
      UPDATE_SIMULATOR_TEXT_TO_DECRYPT_ACTION,
      UPDATE_SIMULATOR_DECRYPTED_TEXT_ACTION,
      UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION,
      UPDATE_SIMULATOR_MULTIPLIER_ACTION,
      UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION,
      UPDATE_SIMULATOR_PADDING_ACTION,
      UPDATE_SIMULATOR_RESET_ENC_ACTION,
      UPDATE_SIMULATOR_RESET_DEC_ACTION,
      UNLOCK_TROPHY_BREAK_WALL,
      UNLOCK_TROPHY_KEYMASTER,
      UNLOCK_TROPHY_SAFETY_FIRST,
      SHOW_TROPHY_ACTION,
    },
    dispatch,
  ),
});

SimulatorPage.propTypes = {
  publicKey: PropTypes.arrayOf(PropTypes.number),
  privateKeyValid: PropTypes.bool.isRequired,
  modulusValid: PropTypes.bool.isRequired,
  multiplierValid: PropTypes.bool.isRequired,
  privateKeySum: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  privateKey: PropTypes.string.isRequired,
  modulus: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiplier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  genKeyCompleted: PropTypes.bool.isRequired,
  trophyKeymaster: PropTypes.bool.isRequired,
  trophySafetyFirst: PropTypes.bool.isRequired,
  trophyBreakWall: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    SHOW_TROPHY_ACTION: PropTypes.func,
    UNLOCK_TROPHY_BREAK_WALL: PropTypes.func,
    UNLOCK_TROPHY_KEYMASTER: PropTypes.func,
    UNLOCK_TROPHY_SAFETY_FIRST: PropTypes.func,
    UPDATE_SIMULATOR_DECRYPTED_TEXT_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_GEN_KEY_COMPLETED_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_MODULO_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_MODULO_VALID_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_MULTIPLIER_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_PADDING_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_PRIVATE_KEY_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_PUBLIC_KEY_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_RESET_DEC_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_RESET_ENC_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_TEXT_TO_DECRYPT_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_TEXT_TO_ENC_ACTION: PropTypes.func,
    UPDATE_SIMULATOR_TEXT_TO_ENC_VALID_ACTION: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(SimulatorPage);
