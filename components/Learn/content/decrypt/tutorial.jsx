import React, { Component } from 'React';

import {
  View,
  Dimensions,
  Button,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';

import {
  Table,
  TableWrapper,
  Rows,
  Row,
  Col
}
  from 'react-native-table-component';

import {
  ALLOW_NEXT_PAGE_ACTION
} from '../../../../redux-modules/actions/tabPage';

import { COLORS } from '../../../../redux-modules/constants/Colors';
// import stylesheet.
import styles from './styles';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ScrollView } from 'react-native-gesture-handler';
import DF1 from '../../../../assets/images/DecryptionFormula_1.png'
import DF2 from '../../../../assets/images/DecryptionFormula_2.png'
import Alert from '../../../../assets/images/alert.png'
import Exclaim from '../../../../assets/images/ExclaimIcon.png'
import InfoIcon from '../../../../assets/images/InfoIcon.png'

import BlocksDecrypt from '../../../Common/BlocksDecrypt';
import CustomButton from '../../../Common/Button';
import ScrollViewPopUp from '../../../Common/ScrollViewPopUp';
import Loader from '../../../Common/Spinner';
import AlertPopUp from '../../../Common/AlertPopUp';
import Block from '../../../Common/Blocks';

class DecryptTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decryptedText: "",
      currentDecryptedBlocks: null,
      showBlocks: false,
      showSpinner: false,
      showInversePopUp: false,
      showrPopUp: false,
      showCmpPopUp: false,
      showPaddingInfoPopUp: false,
    }
  }

  checkPageNo = () => {
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  }

  getBinaryString = (knapsack, yVal) => {
    const { lockState } = this.props;
    let returnObj = {
      ['binlist']: [],
      ['blocks']: [],
    }
    yVal.forEach((y, idx) => {
      let binaryStr = "";
      let blocksInner = {
        ['inital_enc']: lockState.encryption.encryptedText[idx],
        ['initial_r']: Number(y), // get new object so its not mutated
        ['current_r']: [],
        ['knapsack']: [],
        ['decrypted']: [],
        ['new_r']: [],
      }
      for (let i = knapsack.length - 1; i >= 0; i--) {
        blocksInner.knapsack.push(knapsack[i])
        blocksInner.current_r.push(Number(y))
        if (y >= knapsack[i]) {
          binaryStr = `1${binaryStr}`
          y -= knapsack[i]
          blocksInner.decrypted.push('1')
        } else {
          binaryStr = `0${binaryStr}`
          blocksInner.decrypted.push('0')
        }
        blocksInner.new_r.push(Number(y))
      }
      returnObj.blocks.push(blocksInner)
      returnObj.binlist.push(binaryStr)
    })
    return returnObj
  }


  removePadding = (binStringList, padNumber) => {
    let binString = binStringList.join('')
    if (padNumber != 0) {
      return binString.substring(0, (binString.length - padNumber))
    }
    else {
      return binString
    }
  }
  convertBinToText = (binaryString) => {
    let dec = []
    // characters are done in blocks of 8.
    for (let i = 0; i <= binaryString.length - 8; i += 8) {
      let ascii = parseInt(binaryString.substring(i, i + 8), 2)
      dec.push(String.fromCharCode(ascii))
    }
    return dec.join('')
  }
  paddingInfoPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: if padding = 1, remove 1 ‘0’ from the binary x
          {"\n\n"}
          01100001 <Text style={{ color: COLORS.CORRECT_GREEN }}>-0</Text>
        </Text>
      </>
    )
  }
  comparingPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: <Text style={styles.tutorial.boldFont}>R</Text> = 15 and use a to find binary x
        </Text>

        <View style={styles.tutorial.tableMargin}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={['a', 'R', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28, 28]} textStyle={{ textAlign: 'center' }} />
              <Rows data={[
                ['2', '5', '10'],
                [
                  <Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>0</Text>,
                  <Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>5</Text>,
                  <Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>15</Text>
                ],
                ['0', '1', '1'],
              ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={{ textAlign: 'center' }}
              />
            </TableWrapper>
          </Table>
        </View>

        <Text style={styles.tutorial.popUpTextStyle}>
          15 > 10 ? -> true, x = 1
        </Text>
        <Text style={styles.tutorial.popUpTextStyle}>
          15 - 10 = 5
        </Text>
        <Text style={styles.tutorial.popUpTextStyle}>
          5 > 5 ? -> true, x = 1
        </Text>
        <Text style={styles.tutorial.popUpTextStyle}>
          5 - 5 = 0
        </Text>
        <Text style={styles.tutorial.popUpTextStyle}>
          0 > 2 ? -> false, x = 0
        </Text>
      </>
    )
  }
  rPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: <Text style={styles.tutorial.boldFont}>T</Text> = 48, <Text style={{ ...styles.tutorial.inverseStyle, ...styles.tutorial.boldFont }}>
            w^-1
          </Text> = 32,
          and <Text style={{ ...styles.tutorial.modulusStyle, ...styles.tutorial.boldFont }}>
            m
          </Text> = 39{"\n"}
          Using the formula for <Text style={styles.tutorial.boldFont}>R</Text>.
        </Text>
        <Text style={styles.tutorial.popUpTextStyle}>
          <Text style={styles.tutorial.boldFont}>R</Text> = 48 * 32 mod 39 = 15
        </Text>
      </>
    )
  }

  wInversePopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Using Extended Euclidean to find the inverse
          of <Text style={{ ...styles.tutorial.multiplierStyle, ...styles.tutorial.boldFont }}>
            w
          </Text> such that:
        </Text>
        <Text style={{
          ...styles.tutorial.popUpTextStyle,
          textAlign: 'center',
          fontSize: 16
        }}>
          <Text style={{ ...styles.tutorial.inverseStyle, ...styles.tutorial.boldFont }}>
            w^-1
          </Text> * <Text style={{ ...styles.tutorial.multiplierStyle, ...styles.tutorial.boldFont }}>
            w
          </Text> = 1 mod <Text style={{ ...styles.tutorial.modulusStyle, ...styles.tutorial.boldFont }}>
            m
          </Text>
        </Text>
      </>
    )
  }

  decrypt = () => {
    const { actions, lockState } = this.props;
    let encryptedText = lockState.encryption.encryptedText;
    let modulo = lockState.updateParameters.modulo;
    let inverse = lockState.updateParameters.inverse;
    let multiplier = lockState.updateParameters.multiplier;
    let padding = lockState.encryption.padding;
    let privateKey = lockState.updateParameters.privateKeyArr;
    let decrypted = [];
    encryptedText.forEach((enc) => {
      let multiplied = enc * inverse;
      let modVal = multiplied % modulo;
      decrypted.push(modVal)
    })
    let binStringList = this.getBinaryString(privateKey, decrypted)
    let unpadded = this.removePadding(binStringList.binlist, padding)
    let dec = this.convertBinToText(unpadded)

    /*
    this.setState({
      decryptedText: dec,
      currentDecryptedBlocks: binStringList,
      showBlocks: true,
    })*/
    return {
      decryptedText: dec,
      currentDecryptedBlocks: binStringList,
      showBlocks: true,
    }
  }

  async decryption() {
    this.setState({
      showSpinner: true,
    }, () => {
      let decryptRs = this.decrypt()
      setTimeout(() => {
        this.setState({
          showSpinner: false,
          ...decryptRs
        });
      }, 500);
    })

  }

  getSecondPage = () => {
    const { decryptedText, currentDecryptedBlocks } = this.state;
    const { actions, lockState } = this.props;
    let u = Dimensions.get('window').height;

    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
    return (
      <>
        <Text style={styles.tutorial.contentStyle}>
          Remove <Text style={styles.tutorial.linkStyle} onPress={() => { this.setState({ showPaddingInfoPopUp: true, }) }}>
            padding from x
          </Text> if there is any.
          {"\n\n"}
          Next, convert the <Text style={styles.tutorial.boldFont}>
            binary values
          </Text> to the <Text style={styles.tutorial.boldFont}>
            ascii value
          </Text>.{"\n"}
          Lastly, convert the <Text style={styles.tutorial.boldFont}>
            ascii value
          </Text> back to characters to get back the decrypted message.
          {"\n\n"}
          Current Padding: {lockState.encryption.padding}
        </Text>
        <View style={{ marginTop: u * 0.03, marginBottom: u * 0.03 }}>
          {
            currentDecryptedBlocks !== null ?
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.tutorial.multipleButtonLeft}>
                  <CustomButton text="Decrypt" callback={() => {
                    this.decryption()
                  }} />
                </View>

                <View style={styles.tutorial.multipleButtonRight}>
                  <CustomButton text="Blocks"
                    callback={
                      () => {
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
                    }
                    buttonColor="blue"
                  />
                </View>
              </View>

              :
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <CustomButton text="Decrypt" callback={() => {
                  this.decryption()
                }} />
              </View>
          }
        </View>
        {
          decryptedText != ""
            ? <>
              <Text style={styles.tutorial.contentStyle}>
                <Text style={styles.tutorial.boldFont}>Binary value</Text>:{"\n"}
                {lockState.encryption.binaryString}
                {"\n\n"}
                <Text style={styles.tutorial.boldFont}>Ascii value</Text>:{"\n"}
                {lockState.encryption.asciiString}
                {"\n\n"}
                <Text style={styles.tutorial.boldFont}>Decrypted Text</Text>: {decryptedText}
              </Text>
            </>
            : null
        }
      </>
    )
  }
  /*
  getSecondPage = () => {
    const { actions, lockState } = this.props;
    let u = Dimensions.get('window').height

    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()

    }
    return (
      <>
        <Text style={{ ...styles.tutorial.contentStyleSmall, textAlign: 'center', marginBottom: u * 0.02 }}>
          {"Select the largest a which is <= R:"}
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, textAlign: 'center', marginBottom: u * 0.02 }}>
          If it is true, then the corresponding x = 1
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, textAlign: 'center', marginBottom: u * 0.02 }}>
          If false, then x = 0
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, textAlign: 'center', marginBottom: u * 0.02 }}>
          {"Since the next largest a <= the difference, repeat until the difference is 0"}
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, textAlign: 'center', marginBottom: u * 0.02 }}>
          As the knapsack is super increasing, it is comparatively easier to get the values
        </Text>
      </>
    )
  }
  */
  getFirstPage = () => {
    const { actions, lockState } = this.props;
    let u = Dimensions.get('window').height;

    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
    return (
      <>
        <Text style={styles.tutorial.contentStyle}>The current ciphertext is:</Text>
        <Text style={styles.tutorial.contentStyleSmall}>({lockState.encryption.encryptedText.join(', ')})</Text>

        <Text style={{ ...styles.tutorial.contentStyle, marginTop: u * 0.01 }}>
          Padding: {lockState.encryption.padding}
        </Text>

        <View style={{ height: u * 0.04, marginTop: u * 0.02, marginBottom: u * 0.02 }}>
          <Image source={DF1} style={styles.tutorial.imgStyle} />
        </View>

        <Text style={styles.tutorial.contentStyleSmall}>
          Use the <Text
            style={{ ...styles.tutorial.linkStyle, ...styles.tutorial.boldFont, ...styles.tutorial.inverseStyle }}
            onPress={() => { this.setState({ showInversePopUp: true, }) }}>
            inverse multiplier w^-1
          </Text> to calculate <Text style={{ ...styles.tutorial.linkStyle, ...styles.tutorial.boldFont }} onPress={() => { this.setState({ showrPopUp: true, }) }}>
            R
          </Text>.
        </Text>

        <Text style={styles.tutorial.contentStyleSmall}>
          Use the <Text style={styles.tutorial.privateKey}>private key a</Text> to find binary x since
        </Text>

        <View style={{ height: u * 0.03, marginTop: u * 0.02, marginBottom: u * 0.02 }}>
          <Image source={DF2} style={styles.tutorial.imgStyle} />
        </View>

        <Text style={styles.tutorial.contentStyleSmall}>
          Then by <Text style={styles.tutorial.linkStyle} onPress={() => { this.setState({ showCmpPopUp: true, }) }}>
            comparing with a to calculate to obtain the binary value x
          </Text>
        </Text>

        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.02, marginTop: u * 0.01 }}>
          - Select the largest a which is {"<="} <Text style={styles.tutorial.boldFont}>R</Text>:
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.04 }}>
          - If it is true, then the corresponding x = 1{"\n"}
          - If false, then x = 0
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.02 }}>
          - Since the next largest a {"<="} the difference, repeat until the difference is 0
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginTop: u * 0.02 }}>
          Since the knapsack is super-increasing it is comparatively easier to get the binary values
        </Text>
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
      default:
        return this.getFirstPage()
    }
  }
  render() {
    const { lockState } = this.props;
    const {
      showBlocks,
      showSpinner,
      showInversePopUp,
      showrPopUp,
      showCmpPopUp,
      showPaddingInfoPopUp
    } = this.state;
    {
      /*
        BlockDecrypt.propTypes = {
          flexArr: PropTypes.array.isRequired,
          tableTitle: PropTypes.array.isRequired,
          currentR: PropTypes.array.isRequired,
          pubKey: PropTypes.array.isRequired,
          postSub: PropTypes.array.isRequired,
          binary: PropTypes.array.isRequired,
          binaryOrdered: PropTypes.array.isRequired,
          encryptedInput: PropTypes.number.isRequired,
          inverse: PropTypes.number.isRequired,
          modulo: PropTypes.number.isRequired,
          rVal: PropTypes.number.isRequired,
        };
      */
    }
    const { currentDecryptedBlocks } = this.state;
    let decryptedArr = []
    if (currentDecryptedBlocks !== null) {
      let flexLength = []
      for (let i = 0; i < lockState.updateParameters.publicKeyArr.length; i++) {
        flexLength.push(1);
      }
      decryptedArr.push(
        currentDecryptedBlocks.blocks.map((x, idx) => {
          return (
            <View key={`${idx}`}>
              <BlocksDecrypt
                key={`${idx}`}
                flexArr={flexLength}
                tableTitle={
                  [
                    'Current R',
                    'Public Key',
                    'New R',
                    'Binary',
                    'Ordered'
                  ]}
                currentR={
                  x.current_r
                }
                pubKey={
                  x.knapsack
                }
                postSub={
                  x.new_r
                }
                binary={
                  x.decrypted
                }
                binaryOrdered={
                  x.decrypted.slice().reverse()
                }
                encryptedInput={
                  x.inital_enc
                }
                inverse={
                  lockState.updateParameters.inverse
                }
                modulo={
                  lockState.updateParameters.modulo
                }
                rVal={
                  x.initial_r
                }
              />
            </View>
          )
        })

      )
    }
    return (

      <View style={styles.tutorial.learnTabPad}>
        <Text style={styles.tutorial.titleStyle}>Decryption</Text>
        {
          this.getPageElements()
        }
        {
          showSpinner
            ? <Loader />
            : null
        }
        {
          /*
 
  messageContent: PropTypes.string,
  renderedBlocks: PropTypes.node,
  callback: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  icon: PropTypes.node,*/
        }
        {
          showInversePopUp
            ? <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.wInversePopUp()}
              callback={() => { this.setState({ showInversePopUp: false, }) }}
              visibility={showInversePopUp}
            />
            : null
        }
        {
          showrPopUp
            ? <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.rPopUp()}
              callback={() => { this.setState({ showrPopUp: false, }) }}
              visibility={showrPopUp}
            />
            : null
        }
        {
          showCmpPopUp
            ? <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.comparingPopUp()}
              callback={() => { this.setState({ showCmpPopUp: false, }) }}
              visibility={showCmpPopUp}
            />
            : null
        }
        {
          showPaddingInfoPopUp
            ? <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.paddingInfoPopUp()}
              callback={() => { this.setState({ showPaddingInfoPopUp: false, }) }}
              visibility={showPaddingInfoPopUp}
            />
            : null
        }
        {
          showBlocks
            ? <ScrollViewPopUp
              visibility={showBlocks}
              lockStateArr={decryptedArr}
              callback={
                () => {
                  this.setState({
                    showBlocks: false,
                  })
                }
              } />
            : null
        }
      </View>
    )
  }
}


const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ALLOW_NEXT_PAGE_ACTION,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DecryptTutorial);