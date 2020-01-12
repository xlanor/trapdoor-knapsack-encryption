import React, { Component } from 'React';

import {
  View,
  Dimensions,
  Button,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Modal,
  Keyboard,
} from 'react-native';
// import stylesheet.
import styles from './styles';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Table,
  TableWrapper,
  Rows,
  Row,
  Col
} from 'react-native-table-component';

import {
  UPDATE_ENCRYPTION_STRING_ACTION,
  UPDATE_ENCRYPTION_ASCII_STRING_ACTION,
  UPDATE_ENCRYPTION_BINARY_STRING_ACTION,
  UPDATE_ENCRYPTION_PADDING_ACTION,
  UPDATE_ENCRYPTION_BLOCKS_ACTION,
  UPDATE_ENCRYPTED_STRING_ACTION,
} from '../../../../actions/updateEncryption';

import {
  ALLOW_NEXT_PAGE_ACTION
} from '../../../../actions/tabPage';
import { ScrollView } from 'react-native-gesture-handler';

import Block from '../../../Common/Blocks'
import AlertPopUp from '../../../Common/AlertPopUp';

import PopUp from '../../../Common/PopUp';
import ScrollViewPopUp from '../../../Common/ScrollViewPopUp';
import CustomButton from '../../../Common/Button';
import Error from '../../../../assets/images/Error.png';
import InfoIcon from '../../../../assets/images/InfoIcon.png';
import Exclaim from '../../../../assets/images/ExclaimIcon.png';
import EncryptionFormula from '../../../../assets/images/EncryptionFormula.png'
import { COLORS } from '../../../../constants/Colors';

class EncryptTutorial extends Component {
  constructor(props) {
    super(props);
    const { lockState } = this.props;
    let currentEncryptText = lockState.encryption.textToEncrypt;
    this.state = {
      currentTextBox: currentEncryptText === "" ? "" : currentEncryptText, // temporary, to be stored in redux - this is only for use in onTextChange
      showError: false,
      showBlocks: false,
      showSpinner: true,
      errorMessage: "",
      keyboardVisiblity: false,
      showPaddingInfoPopUp: false,
      showCiphertextInfoPopUp: false,
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


  showError = (message) => {
    this.setState({
      showError: true,
      errorMessage: message,
    })
  }

  hideError = () => {
    this.setState({
      showError: false,
    })
  }

  sumReducer = (accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue);
  }

  checkPageNo = () => {
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  }

  isEmptyInput = () => {
    const { currentTextBox } = this.state;
    return currentTextBox.trim() === "" ? true : false;
  }

  getBinaryOfInput = () => {
    const { currentTextBox } = this.state;
    return (
      Array.from(currentTextBox)
        .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
        .map(bin => '0'.repeat(8 - bin.length) + bin)
        .join('')
    );
  }

  getBinaryString = (knapsack, yVal) => {
    let binList = [];
    yVal.forEach((y) => {
      let binaryStr = "";
      for (let i = knapsack.length - 1; i >= 0; i--) {
        console.log(`Current y ${y} Current Knapsack ${knapsack[i]}`)
        if (y >= knapsack[i]) {
          binaryStr = `1${binaryStr}`
          y -= knapsack[i]
        } else {
          binaryStr = `0${binaryStr}`
        }
      }
      binList.push(binaryStr)
    })
    return binList
  }

  chunk = (binaryString, trapdoorSize) => {
    const { actions } = this.props;
    let binBlocks = []
    let upper = binaryString.length - trapdoorSize
    console.log("Upper limit " + upper)
    console.log("Trapdoor size:" + trapdoorSize)
    for (let i = 0; i <= upper; i += trapdoorSize) {
      binBlocks.push(binaryString.substring(i, i + trapdoorSize));
    }
    // need to pad
    if (binaryString.length % trapdoorSize != 0) {
      let padding = trapdoorSize - (binaryString.length % trapdoorSize);
      let start = binaryString.length - (binaryString.length % trapdoorSize);
      let blockStr = binaryString.substring(start);
      console.log(`Padding to ${padding}`)
      for (let j = 0; j < padding; j++) {
        blockStr += '0';
      }
      binBlocks.push(blockStr);
      actions.UPDATE_ENCRYPTION_PADDING_ACTION(padding);
    } else {
      actions.UPDATE_ENCRYPTION_PADDING_ACTION(0);
    }
    let binBlocksNumeric = []
    for (let i = 0; i < binBlocks.length; i++) {
      // for each number string inside bin blocks, cast it to an array of numbers.
      console.log(binBlocks[i]);
      let binLen = binBlocks[i].length;
      let numeric = binBlocks[i].split('').map(Number)
      let differential = binLen - numeric.length;
      while (differential != 0) {
        numeric.unshift(0) // prepends
        differential -= 1
      }
      binBlocksNumeric.push(
        numeric
      )

    }
    return binBlocksNumeric;
  }

  validateInput = () => {
    const { lockState, actions } = this.props;
    const { currentTextBox } = this.state;
    if (this.isEmptyInput()) {
      // TODO: show popup error
      this.showError("Encryption String cannot be empty!")
    } else {
      // compute binary equivalent
      let binString = this.getBinaryOfInput()
      actions.UPDATE_ENCRYPTION_STRING_ACTION(currentTextBox)
      actions.UPDATE_ENCRYPTION_BINARY_STRING_ACTION(binString)
      actions.UPDATE_ENCRYPTION_ASCII_STRING_ACTION(currentTextBox)
      actions.ALLOW_NEXT_PAGE_ACTION()
      Keyboard.dismiss()
    }
  }

  generateBinaryBlocks = () => {
    const { lockState, actions } = this.props
    let binUserInput = lockState.encryption.binaryString;
    let binPubKeyString = lockState.updateParameters.publicKeyString;
    let binPubKeyArr = lockState.updateParameters.publicKeyArr;
    console.log(lockState)
    console.log(` User Input: ${binUserInput}`)
    console.log(` Public Key: ${binPubKeyArr}`)
    let binaryBlocks = this.chunk(binUserInput, binPubKeyArr.length)
    console.log(binaryBlocks)
    actions.UPDATE_ENCRYPTION_BLOCKS_ACTION(binaryBlocks)
    actions.ALLOW_NEXT_PAGE_ACTION()
    this.setState({
      showBlocks: true,
    })
  }

  paddingInfoPopUp = () => {
    return (
      <View>
        <Text style={styles.tutorial.popUpTextStyle}>
          Padding - insert ‘0’s at back of binary string to fill the block
          {"\n\n"}
          Eg: 01100001 <Text style={{ color: COLORS.CORRECT_GREEN }}>+0</Text>
        </Text>
      </View>
    )
  }
  ciphertextInfoPopUp = () => {
    return (
      <View>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: using the encryption formula to calculate
        </Text>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x', 'Total']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '1', '1'],
                ['0', '16+', '32+'],
                [<Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>T = 48</Text>]
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
      </View>
    )
  }
  getFifthPage = () => {
    const { actions } = this.props;
    return (
      <>
        <Text style={{ textAlign: 'center' }}>
          <Text style={styles.tutorial.contentStyle}>Quiz Time</Text>{"\n"}
          <Text style={styles.tutorial.contentStyle}>W.I.P</Text>
        </Text>
      </>
    )
  }
  /*getFourthPage = () => {
    const { showBlocks } = this.state;
    const { lockState, actions } = this.props;

    return (
      <View>
        <Text style={styles.tutorial.textStyleHeader2}>
          Depending on the number of elements in your public key b,
          the binary values are assigned into blocks.
          (size of binary / size of b)
        </Text>
        <Text style={styles.tutorial.textStyleHeader2}>
          Your public key b,
          padding may have to be applied based on the length of the public key and the message.
        </Text>
        <Text style={styles.tutorial.textStyleHeader2}>
          The following blocks chart out the additional process of obtaining the first encryption using b.
        </Text>

        {
          lockState.encryption.binaryBlocks.length != 0
            ?
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.tutorial.multipleButtonLeft}>
                <CustomButton text="Encrypt" callback={() => {
                  this.generateBinaryBlocks()
                }} />
              </View>

              <View style={styles.tutorial.multipleButtonRight}>
                <CustomButton text="Blocks"
                  callback={
                    () => {
                      this.setState({
                        showBlocks: true,
                      })
                    }
                  }
                  buttonColor="blue"
                />
              </View>
            </View>
            :
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <CustomButton
                text="Encrypt"
                callback={
                  () => {
                    this.generateBinaryBlocks()
                  }
                }
              />
            </View>
        }
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tutorial.textStyle}>
            Ciphertext:
          </Text>
          {
            lockState.encryption.encryptedText.length != 0 ?
              <Text tyle={styles.tutorial.textStyle}>
                {lockState.encryption.encryptedText.join(", ")}
              </Text>
              : null
          }
        </View>

      </View>
    )
  }*/
  getFourthPage = () => {
    const { showBlocks } = this.state;
    const { lockState, actions } = this.props;
    let u = Dimensions.get('window').height;

    return (
      <View>
        <Text style={styles.tutorial.contentStyle}>
          Now, compute <Text style={styles.tutorial.linkStyle} onPress={() => { this.setState({ showCiphertextInfoPopUp: true, }) }} >
            ciphertext T
          </Text> using:
        </Text>
        <View style={{ height: u * 0.09, marginTop: u * 0.02, marginBottom: u * 0.02 }}>
          <Image
            source={EncryptionFormula}
            style={styles.tutorial.imgStyle}
          />
        </View>

        <Text style={styles.tutorial.contentStyle}>
          Your public key b:
        </Text>
        <Text style={styles.tutorial.contentStyleSmall}>
          Binary values x are assigned into blocks and will add padding if there is a need.
          {"\n\n"}
          The following blocks chart out the process of obtaining ciphertext using b.
        </Text>
        <View style={{ marginTop: u * 0.03 }}>
          {
            lockState.encryption.binaryBlocks.length != 0
              ?
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.tutorial.multipleButtonLeft}>
                  <CustomButton text="Encrypt" callback={() => {
                    this.generateBinaryBlocks()
                  }} />
                </View>

                <View style={styles.tutorial.multipleButtonRight}>
                  <CustomButton text="Blocks"
                    callback={
                      () => {
                        this.setState({
                          showBlocks: true,
                        })
                      }
                    }
                    buttonColor="blue"
                  />
                </View>
              </View>
              :
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <CustomButton
                  text="Encrypt"
                  callback={
                    () => {
                      this.generateBinaryBlocks()
                    }
                  }
                />
              </View>
          }
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tutorial.contentStyleSmall}>
            Ciphertext:
          </Text>
          {
            lockState.encryption.encryptedText.length != 0 ?
              <Text tyle={styles.tutorial.contentStyleSmall}>
                {lockState.encryption.encryptedText.join(", ")}
              </Text>
              : null
          }
        </View>
      </View>
    )
  }
  getThirdPage = () => {
    const { actions, lockState } = this.props;
    let u = Dimensions.get('window').height

    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
    return (
      <View>
        <Text style={styles.tutorial.contentStyle}>
          The solution to it is to
          add <Text style={styles.tutorial.linkStyle} onPress={() => { this.setState({ showPaddingInfoPopUp: true, }) }} >
            padding
          </Text>
        </Text>
        <Text style={{ ...styles.tutorial.contentStyle, marginTop: u * 0.02 }}>
          To get padding value:
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.03 }}>
          - Remainder = binary length % n{"\n"}
          - If the remainder is 0, padding = 0{"\n"}
          - If the remainder is not 0, padding = n minus remainder
        </Text>
        <Text style={{
          ...styles.tutorial.contentStyleSmall,
          ...styles.tutorial.encryptTextGray,
          marginTop: u * 0.01
        }}>
          eg:{"\n"}
          remainder = 8 % 3 = 2{"\n"}
          Padding = 3 - 2 = 1{"\n"}
          Add 1 '0' to the back of the binary string x
        </Text>

        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '1', '1'],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '0', '0'],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '1', <Text style={styles.tutorial.tableCorrectValue}>0</Text>],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
      </View>
    )
  }

  getSecondPage = () => {
    const { actions, lockState } = this.props;

    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
    ALLOW_NEXT_PAGE_ACTION
    return (
      <>
        <Text style={styles.tutorial.contentStyle}>
          However, there might be cases where binary cannot be divided into equal
          blocks according to knapsack size n to correspond to public key.
        </Text>
        <Text style={{
          ...styles.tutorial.contentStyleSmall,
          ...styles.tutorial.encryptTextGray,
          marginTop: Dimensions.get('window').height * 0.02
        }}>
          E.g:{"\n"}
          Public key b: (22, 16, 32) where n = 3{"\n"}
          Message: a, ASCII of a = 97{"\n"}
          Binary of 97: '0110 0001'{"\n"}
          Binary length / n: 8 / 3 = 3 (rounded up)
        </Text>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '1', '1'],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '0', '0'],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={styles.tutorial.tableHeaderValue} />
              <Rows data={[
                ['22', '16', '32'],
                ['0', '1', <Text style={styles.tutorial.tableUnknownValue}>?</Text>],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
      </>
    )
  }

  getFirstPage = () => {
    const { lockState } = this.props;
    const { keyboardVisiblity } = this.state;

    return (
      <>
        {
          keyboardVisiblity
            ? null
            : (
              <>
                <Text style={styles.tutorial.contentStyle}>
                  Now, to encrypt a message,
                  you first need to convert the message into ascii values and then to binary.
                </Text>
              </>
            )
        }

        <Text style={
          keyboardVisiblity
            ? { ...styles.tutorial.contentStyleSmall, marginTop: Dimensions.get('screen').height * 0.02, }
            : { ...styles.tutorial.contentStyleSmall, marginTop: 0 }
        }>Enter your message to encrypt:</Text>
        <TextInput defaultValue={
          lockState.encryption.textToEncrypt === ""
            ? null
            : lockState.encryption.textToEncrypt
        } style={styles.tutorial.textBoxStyle} onChangeText={(text) => {
          this.setState({
            currentTextBox: text,
          })
        }} />
        <View style={styles.tutorial.buttonRow}>
          <CustomButton text="Validate" callback={this.validateInput} />
        </View>
        {
          lockState.encryption.textToEncrypt === ""
            ? null
            : <>
              {
                keyboardVisiblity
                  ? null
                  : (
                    <>
                      <Text style={styles.tutorial.contentStyleSmall}>
                        <Text style={styles.tutorial.boldFont}>Your message:</Text> {lockState.encryption.textToEncrypt}{"\n"}
                        <Text style={styles.tutorial.boldFont}>Ascii value:</Text> W.I.P{"\n"}
                        <Text style={styles.tutorial.boldFont}>Binary value:</Text> {lockState.encryption.binaryString}
                      </Text>
                      <Text style={{
                        ...styles.tutorial.contentStyleSmall,
                        marginTop: Dimensions.get('window').height * 0.02
                      }}>
                        Divide the binary string to the blocks according to knapsack size n to corresponds public key
                        (binary length ÷ n)
                      </Text>
                      <Text style={{
                        ...styles.tutorial.contentStyleSmall,
                        marginTop: Dimensions.get('window').height * 0.02
                      }}>
                        Add the public key b that corresponds to the value 1 in binary x
                      </Text>
                    </>
                  )
              }
            </>
        }
      </>

    )
  }

  getPageElements = () => {
    let pageNo = this.checkPageNo()
    switch (pageNo) {
      case 1:
        return this.getFirstPage()
      case 2:
        return this.getSecondPage()
      case 3:
        return this.getThirdPage()
      case 4:
        return this.getFourthPage()
      case 5:
        return this.getFifthPage()
      default:
        return this.getFirstPage()
    }
  }

  render() {
    const {
      showError,
      errorMessage,
      showBlocks,
      showPaddingInfoPopUp,
      showCiphertextInfoPopUp,
      keyboardVisiblity
    } = this.state;
    const { lockState, actions } = this.props;
    let lockStateArr = null;
    if (lockState.encryption.binaryBlocks.length != 0) {
      let flexLength = []
      for (let i = 0; i < lockState.updateParameters.publicKeyArr.length; i++) {
        flexLength.push(1);
      }
      let encryptedArr = [];
      lockStateArr = lockState.encryption.binaryBlocks.map((block, idx) => {
        encryptedArr.push(block.map((x, index) => {
          return Number(lockState.updateParameters.publicKeyArr[index]) * Number(x)
        }))
        return (
          <View key={'binary-' + idx}>
            <Block
              key={'binary-' + idx}
              tableTitle={["Key", "Binary", "Total"]}
              flexArr={flexLength}
              tableData={block}
              currentPublicKey={lockState.updateParameters.publicKeyArr}
              tableType="binary"
              blockNo={idx + 1}
            />
          </View>
        )
      })
      console.log(encryptedArr)
      for (let i = 0; i < encryptedArr.length; i++) {
        encryptedArr[i] = encryptedArr[i].reduce(this.sumReducer)
      }
      if (lockState.encryption.encryptedText.length == 0) {
        actions.UPDATE_ENCRYPTED_STRING_ACTION(encryptedArr)
      }

    }


    return (
      <>
        {
          showBlocks
            ? <ScrollViewPopUp
              visibility={showBlocks}
              lockStateArr={lockStateArr}
              title="Encrypted Blocks"
              callback={() => {
                this.setState({
                  showBlocks: false,
                })
              }
              } />
            : null
        }
        {
          showError
            ? <PopUp visibility={showError} close={this.hideError} message={errorMessage} icon={Error} />
            : null
        }
        {
          showPaddingInfoPopUp
            ? <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.paddingInfoPopUp()}
              callback={() => { this.setState({ showPaddingInfoPopUp: false, }) }}
              visibility={showPaddingInfoPopUp} />
            : null
        }
        {
          showCiphertextInfoPopUp
            ? <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.ciphertextInfoPopUp()}
              callback={() => { this.setState({ showCiphertextInfoPopUp: false, }) }}
              visibility={showCiphertextInfoPopUp} />
            : null
        }
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
          <View style={{ ...styles.tutorial.learnTabPad, height: '100%' }}>
            <View style={styles.tutorial.textStyleTitleWrapper}>
              {
                keyboardVisiblity
                  ? null
                  : <Text style={styles.tutorial.titleStyle}>Encryption</Text>
              }
            </View>
            {
              this.getPageElements()
            }
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    UPDATE_ENCRYPTION_STRING_ACTION,
    UPDATE_ENCRYPTION_ASCII_STRING_ACTION,
    UPDATE_ENCRYPTION_BINARY_STRING_ACTION,
    UPDATE_ENCRYPTION_PADDING_ACTION,
    UPDATE_ENCRYPTION_BLOCKS_ACTION,
    UPDATE_ENCRYPTED_STRING_ACTION,
    ALLOW_NEXT_PAGE_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(EncryptTutorial);