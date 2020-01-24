// react imports
import React, { Component } from 'React';

// react-native imports.
import {
  View,ScrollView,
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

/* Third Party Libs begin here */

// Redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Redux Actions Imports
import {
  UPDATE_ENCRYPTION_STRING_ACTION,
  UPDATE_ENCRYPTION_ASCII_STRING_ACTION,
  UPDATE_ENCRYPTION_BINARY_STRING_ACTION,
  UPDATE_ENCRYPTION_PADDING_ACTION,
  UPDATE_ENCRYPTION_BLOCKS_ACTION,
  UPDATE_ENCRYPTED_STRING_ACTION,
} from '../../../../redux-modules/actions/updateEncryption';
import {
  ALLOW_NEXT_PAGE_ACTION,
  NEXT_ENCRYPT_PAGE_ACTION,
} from '../../../../redux-modules/actions/tabPage';
import {
  DECRYPT_UNLOCK_ACTION
} from '../../../../redux-modules/actions/learnPageLock';

// React-Native Table Imports
import {
  Table,
  TableWrapper,
  Rows,
  Row,
  Col
} from 'react-native-table-component';


// React Native Animatable Imports
import * as Animatable from "react-native-animatable";

// React Native Elements Imports
import { Card, Button as RneButton, Image as RneImage } from 'react-native-elements'

// Constant Imports
import { COLORS } from '../../../../redux-modules/constants/Colors';

// Image Asset Imports
import Error from '../../../../assets/images/Error.png';
import InfoIcon from '../../../../assets/images/InfoIcon.png';
import Exclaim from '../../../../assets/images/ExclaimIcon.png';
import EncryptionFormula from '../../../../assets/images/EncryptionFormula.png'
import Unlock from '../../../../assets/images/unlock.png';

// Other Component Imports
import AlertPopUp from '../../../Common/AlertPopUp';
import Block from '../../../Common/Blocks'
import Loader from '../../../Common/Spinner';
import PopUp from '../../../Common/PopUp';
import ScrollViewPopUp from '../../../Common/ScrollViewPopUp';
import Quiz from '../../quiz/Quiz';

import contents from './contents';


class EncryptTutorial extends Component {
  constructor(props) {
    super(props);
    const { lockState } = this.props;
    let currentEncryptText = lockState.encryption.textToEncrypt;
    this.state = {
      currentTextBox: currentEncryptText === "" ? "" : currentEncryptText, // temporary, to be stored in redux - this is only for use in onTextChange
      showError: false,
      showBlocks: false,
      showSpinner: false,
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

  setSpinner = () =>{
    this.setState({
        showSpinner: true,

    }, () => {
      setTimeout(() => {
          this.setState({
          showBlocks: true,
          showSpinner: false,
          });
      }, 500)
    })
  }

  setSpinnerCallback = (callback) =>{
    this.setState({
        showSpinner: true,

    }, () => {
      setTimeout(() => {
          this.setState({
          showBlocks: true,
          showSpinner: false,
          }, ()=>{
            callback()
          });
      }, 500)
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
    let utf8 =unescape(encodeURIComponent(currentTextBox));
    return (
      Array.from(utf8)
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
    let asciiVal = this.stringToAscii(currentTextBox);
    if (this.isEmptyInput()) {
      // TODO: show popup error
      this.showError("Encryption String cannot be empty!")
    } else {
      // compute binary equivalent
      let binString = this.getBinaryOfInput()
      actions.UPDATE_ENCRYPTION_STRING_ACTION(currentTextBox)
      actions.UPDATE_ENCRYPTION_BINARY_STRING_ACTION(binString)
      actions.UPDATE_ENCRYPTION_ASCII_STRING_ACTION(asciiVal)
      actions.ALLOW_NEXT_PAGE_ACTION()
      Keyboard.dismiss()
    }
  }

  generateBinaryBlocks = () => {
    const { lockState, actions } = this.props
    let binUserInput = lockState.encryption.binaryString;
    let binPubKeyString = lockState.updateParameters.publicKeyString;
    let binPubKeyArr = lockState.updateParameters.publicKeyArr;
    this.setSpinnerCallback(()=>{
      let binaryBlocks = this.chunk(binUserInput, binPubKeyArr.length) 
      console.log(binaryBlocks)
      actions.UPDATE_ENCRYPTION_BLOCKS_ACTION(binaryBlocks)
      actions.ALLOW_NEXT_PAGE_ACTION()
      this.setState({
        showBlocks: true,
      })
    })
    
  }

  paddingInfoPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Padding - insert ‘0’s at back of binary string to fill the block
          {"\n\n"}
          Eg: 01100001 <Text style={{ color: COLORS.CORRECT_GREEN }}>+0</Text>
        </Text>
      </>
    )
  }
  ciphertextInfoPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: using the encryption formula to calculate
        </Text>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col
                data={[<Text style={styles.tutorial.tablePublicKeyValue}>b</Text>, 'x', 'Total']}
                style={{ flex: 1, backgroundColor: '#f6f8fa' }}
                heightArr={[28, 28]}
                textStyle={styles.tutorial.tableHeaderValue} />
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
      </>
    )
  }
  stringToAscii = (text) => {
    const { lockState } = this.props
    var asciiVal = "("

    for (var i = 0; i < text.length; i++) {
      asciiVal += (Number)(text.charCodeAt(i));
      if (i + 1 != text.length)
        asciiVal += ", ";
    }
    asciiVal += ")";

    return asciiVal
  }

  updateCurrentTextbox = (text) => {
    this.setState({
      currentTextBox: text,
    })
  }

  showBlocks = () => {
    this.setState({
        showBlocks: true,
    })
  }

  showCiphertextInfoPopUp = () => {
    this.setState({ showCiphertextInfoPopUp: true, })
  }

  showPaddingInfoPopUp = () => {
    this.setState({ showPaddingInfoPopUp: true, })
  }

  getSixthPage = () => {
    const { actions } = this.props;
    return(
      <Animatable.View animation="slideInDown">
          <Card title="Unlocked Next Tab!">
            <RneButton
              type="clear"
              icon={
                <Image source={Unlock} 
                style={styles.tutorial.unlockIconStyle}/>}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              onPress = {()=>{actions.DECRYPT_UNLOCK_ACTION()}}
            >

            </RneButton>
          </Card>
      </Animatable.View>
    )

  }

  getFifthPage = () => {
    const { actions } = this.props;
    return (
      <>
        <Text style={{ ...styles.tutorial.contentStyle, textAlign: 'center' }}>Quiz Time</Text>
        <Quiz quizType="ENCRYPT" callback={()=>{actions.ALLOW_NEXT_PAGE_ACTION(); actions.NEXT_ENCRYPT_PAGE_ACTION()}} />
      </>
    )
  }
  
  getFourthPage = () => {
    const { showBlocks } = this.state;
    const { lockState, actions } = this.props;
    let Page4 = contents.page4;
    return (
      <Page4
          showCiphertextInfoPopUp={()=>{this.showCiphertextInfoPopUp()}}
          generateBinaryBlocks={()=>{this.generateBinaryBlocks()}}
          showBlocks={()=>{this.showBlocks()}}
          setSpinner={()=>{this.setSpinner()}}
      />
    )
   
  }
  getThirdPage = () => {
    const { actions, lockState } = this.props;
    let Page3 = contents.page3;

    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
    return (
        <Page3 showPaddingInfoPopUp={()=>{this.showPaddingInfoPopUp()}}/>
    )
   
  }

  getSecondPage = () => {
    const { actions, lockState } = this.props;
    let Page2 = contents.page2;
    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
    return(
        <Page2 />
    )
    
  }

  getFirstPage = () => {
    const { keyboardVisiblity } = this.state;
     let Page1 = contents.page1;
     return (
       <Page1
          keyboardVisiblity={keyboardVisiblity}
          updateCurrentTextBox={(text)=>{this.updateCurrentTextbox(text)}}
          validateInput={()=>{this.validateInput()}}  
       />
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
      case 6:
        return this.getSixthPage()
      default:
        return this.getFirstPage()
    }
  }

  render() {
    const {
      showError,
      showSpinner,
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
          showSpinner
            ? <Loader />
            : null
        }
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
            <ScrollView>
          <View onStartShouldSetResponder={() => true} style={{ ...styles.tutorial.learnTabPad, height: '100%' }}>
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
            </ScrollView>
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
    DECRYPT_UNLOCK_ACTION,
    NEXT_ENCRYPT_PAGE_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(EncryptTutorial);