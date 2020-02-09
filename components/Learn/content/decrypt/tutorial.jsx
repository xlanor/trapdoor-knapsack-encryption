import React, { Component } from 'react';

import { View, Dimensions, ScrollView, Text } from 'react-native';

import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';

import * as Animatable from 'react-native-animatable';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ALLOW_NEXT_PAGE_ACTION, NEXT_DECRYPT_PAGE_ACTION } from '../../../../redux-modules/actions/tabPage';

import {
  UNLOCK_TROPHY_REVEAL,
  UNLOCK_TROPHY_BREAK_WALL,
  SHOW_TROPHY_ACTION,
} from '../../../../redux-modules/actions/manageTrophies';

// React Native Animatable Imports

// React Native Elements Imports

import { COLORS } from '../../../../redux-modules/constants/Colors';
// import stylesheet.
import styles from './styles';
// begin redux imports

import InfoIcon from '../../../../assets/images/InfoIcon.png';

import BlocksDecrypt from '../../../Common/BlocksDecrypt';
import ScrollViewPopUp from '../../../Common/ScrollViewPopUp';
import Loader from '../../../Common/Spinner';
import AlertPopUp from '../../../Common/AlertPopUp';
import Quiz from '../../quiz/Quiz';

import content from './contents';

class DecryptTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decryptedText: '',
      currentDecryptedBlocks: null,
      showBlocks: false,
      showSpinner: false,
      showInversePopUp: false,
      showrPopUp: false,
      showCmpPopUp: false,
      showPaddingInfoPopUp: false,
    };
  }

  setSpinner = () => {
    this.setState(
      {
        showSpinner: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            showBlocks: true,
            showSpinner: false,
          });
        }, 500);
      },
    );
  };

  showCmpPopUp = () => {
    this.setState({ showCmpPopUp: true });
  };

  showrPopUp = () => {
    this.setState({ showrPopUp: true });
  };

  showPaddingInfoPopUp = () => {
    this.setState({ showPaddingInfoPopUp: true });
  };

  showInversePopUp = () => {
    this.setState({ showInversePopUp: true });
  };

  checkPageNo = () => {
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  };

  getBinaryString = (knapsack, yVal) => {
    const { lockState } = this.props;
    const returnObj = {
      binlist: [],
      blocks: [],
    };
    yVal.forEach((y, idx) => {
      let binaryStr = '';
      const blocksInner = {
        inital_enc: lockState.encryption.encryptedText[idx],
        initial_r: Number(y), // get new object so its not mutated
        current_r: [],
        knapsack: [],
        decrypted: [],
        new_r: [],
      };
      for (let i = knapsack.length - 1; i >= 0; i--) {
        blocksInner.knapsack.push(knapsack[i]);
        blocksInner.current_r.push(Number(y));
        if (y >= knapsack[i]) {
          binaryStr = `1${binaryStr}`;
          y -= knapsack[i];
          blocksInner.decrypted.push('1');
        } else {
          binaryStr = `0${binaryStr}`;
          blocksInner.decrypted.push('0');
        }
        blocksInner.new_r.push(Number(y));
      }
      returnObj.blocks.push(blocksInner);
      returnObj.binlist.push(binaryStr);
    });
    return returnObj;
  };

  removePadding = (binStringList, padNumber) => {
    const binString = binStringList.join('');
    if (padNumber != 0) {
      return binString.substring(0, binString.length - padNumber);
    }

    return binString;
  };

  convertBinToText = binaryString => {
    const dec = [];
    // characters are done in blocks of 8.
    for (let i = 0; i <= binaryString.length - 8; i += 8) {
      const ascii = parseInt(binaryString.substring(i, i + 8), 2);
      dec.push(String.fromCharCode(ascii));
    }
    return decodeURIComponent(escape(dec.join('')));
  };

  paddingInfoPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: if padding = 1, remove 1 ‘0’ from the binary x{'\n\n'}
          01100001 <Text style={{ color: COLORS.CORRECT_GREEN }}>-0</Text>
        </Text>
      </>
    );
  };

  comparingPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: <Text style={styles.tutorial.boldFont}>R</Text> = 15 and use a to find binary x
        </Text>

        <View style={styles.tutorial.tableMargin}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col
                data={['a', 'R', 'x']}
                style={{ flex: 1, backgroundColor: '#f6f8fa' }}
                heightArr={[28, 28]}
                textStyle={{ textAlign: 'center' }}
              />
              <Rows
                data={[
                  ['2', '5', '10'],
                  [
                    <Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>0</Text>,
                    <Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>5</Text>,
                    <Text style={{ color: COLORS.CORRECT_GREEN, textAlign: 'center' }}>15</Text>,
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

        <Text style={styles.tutorial.popUpTextStyle}>15 > 10 ? -> true, x = 1</Text>
        <Text style={styles.tutorial.popUpTextStyle}>15 - 10 = 5</Text>
        <Text style={styles.tutorial.popUpTextStyle}>5 > 5 ? -> true, x = 1</Text>
        <Text style={styles.tutorial.popUpTextStyle}>5 - 5 = 0</Text>
        <Text style={styles.tutorial.popUpTextStyle}>0 > 2 ? -> false, x = 0</Text>
      </>
    );
  };

  rPopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Eg: <Text style={styles.tutorial.boldFont}>T</Text> = 48,{' '}
          <Text style={{ ...styles.tutorial.inverseStyle, ...styles.tutorial.boldFont }}>w^-1</Text> = 32, and{' '}
          <Text style={{ ...styles.tutorial.modulusStyle, ...styles.tutorial.boldFont }}>m</Text> = 39{'\n'}
          Using the formula for <Text style={styles.tutorial.boldFont}>R</Text>.
        </Text>
        <Text style={styles.tutorial.popUpTextStyle}>
          <Text style={styles.tutorial.boldFont}>R</Text> = 48 * 32 mod 39 = 15
        </Text>
      </>
    );
  };

  wInversePopUp = () => {
    return (
      <>
        <Text style={styles.tutorial.popUpTextStyle}>
          Using Extended Euclidean to find the inverse of{' '}
          <Text style={{ ...styles.tutorial.multiplierStyle, ...styles.tutorial.boldFont }}>w</Text> such that:
        </Text>
        <Text
          style={{
            ...styles.tutorial.popUpTextStyle,
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          <Text style={{ ...styles.tutorial.inverseStyle, ...styles.tutorial.boldFont }}>w^-1</Text> *{' '}
          <Text style={{ ...styles.tutorial.multiplierStyle, ...styles.tutorial.boldFont }}>w</Text> ≡ 1 mod{' '}
          <Text style={{ ...styles.tutorial.modulusStyle, ...styles.tutorial.boldFont }}>m</Text>
        </Text>
      </>
    );
  };

  decrypt = () => {
    const { actions, lockState } = this.props;
    const { encryptedText } = lockState.encryption;
    const { modulo } = lockState.updateParameters;
    const { inverse } = lockState.updateParameters;
    const { multiplier } = lockState.updateParameters;
    const { padding } = lockState.encryption;
    const privateKey = lockState.updateParameters.privateKeyArr;
    const decrypted = [];
    encryptedText.forEach(enc => {
      const multiplied = enc * inverse;
      const modVal = multiplied % modulo;
      decrypted.push(modVal);
    });
    const binStringList = this.getBinaryString(privateKey, decrypted);
    const unpadded = this.removePadding(binStringList.binlist, padding);
    const dec = this.convertBinToText(unpadded);

    return {
      decryptedText: dec,
      currentDecryptedBlocks: binStringList,
      showBlocks: true,
    };
  };

  async decryption() {
    const { actions, trophyBreakWall } = this.props;
    this.setState(
      {
        showSpinner: true,
      },
      () => {
        const decryptRs = this.decrypt();
        setTimeout(() => {
          this.setState({
            showSpinner: false,
            ...decryptRs,
          });
        }, 500);
      },
    );
  }

  unlockTrophy = () => {
    const { actions, trophyReveal } = this.props;
    actions.UNLOCK_TROPHY_REVEAL();
    if (!trophyReveal) {
      actions.SHOW_TROPHY_ACTION();
    }
  };

  getFourthPage = () => {
    /*    UNLOCK_TROPHY_REVEAL,
        SHOW_TROPHY_ACTION, */

    return (
      <Animatable.View animation="slideInDown">
        <Card title="Congratulations!">
          <Text>You have reached the end of the tutorial!</Text>
        </Card>
      </Animatable.View>
    );
  };

  getThirdPage = () => {
    const { actions } = this.props;
    return (
      <>
        <Quiz
          quizType="DECRYPT"
          callback={() => {
            actions.ALLOW_NEXT_PAGE_ACTION();
            actions.NEXT_DECRYPT_PAGE_ACTION();
            this.unlockTrophy();
          }}
        />
      </>
    );
  };

  getSecondPage = () => {
    const { decryptedText, currentDecryptedBlocks } = this.state;
    const { actions, lockState } = this.props;
    const u = Dimensions.get('window').height;

    const Page2 = content.page2;
    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION();
    }
    return (
      <Page2
        showPaddingInfoPopUp={() => {
          this.showPaddingInfoPopUp();
        }}
        currentDecryptedBlocks={currentDecryptedBlocks}
        decryption={() => {
          this.decryption();
        }}
        setSpinner={() => {
          this.setSpinner();
        }}
        decryptedText={decryptedText}
      />
    );
  };

  getFirstPage = () => {
    const { actions, lockState } = this.props;
    const Page1 = content.page1;
    if (!lockState.lessonPageTabAndPages.allowNextPage) {
      actions.ALLOW_NEXT_PAGE_ACTION();
    }
    return (
      <Page1
        showInversePopUp={() => {
          this.showInversePopUp();
        }}
        showrPopUp={() => {
          this.showrPopUp();
        }}
        showCmpPopUp={() => {
          this.showCmpPopUp();
        }}
      />
    );
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
      default:
        return this.getFirstPage();
    }
  };

  render() {
    const { lockState } = this.props;
    const { showBlocks, showSpinner, showInversePopUp, showrPopUp, showCmpPopUp, showPaddingInfoPopUp } = this.state;
    const { currentDecryptedBlocks } = this.state;
    const decryptedArr = [];
    if (currentDecryptedBlocks !== null) {
      const flexLength = [];
      for (let i = 0; i < lockState.updateParameters.publicKeyArr.length; i++) {
        flexLength.push(Dimensions.get('screen').width * 0.2);
      }
      decryptedArr.push(
        currentDecryptedBlocks.blocks.map((x, idx) => {
          return (
            <View key={`${idx}`}>
              <BlocksDecrypt
                key={`${idx}`}
                flexArr={flexLength}
                tableTitle={['Current R', 'Public Key', 'New R', 'Binary', 'Ordered']}
                currentR={x.current_r}
                pubKey={x.knapsack}
                postSub={x.new_r}
                binary={x.decrypted}
                binaryOrdered={x.decrypted.slice().reverse()}
                encryptedInput={x.inital_enc}
                inverse={lockState.updateParameters.inverse}
                modulo={lockState.updateParameters.modulo}
                rVal={x.initial_r}
              />
            </View>
          );
        }),
      );
    }
    return (
      <ScrollView
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={() => {
          this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
        }}
      >
        <View>
          <Text style={styles.tutorial.titleStyle}>Decryption</Text>
          {this.getPageElements()}
          {showSpinner ? <Loader /> : null}

          {showInversePopUp ? (
            <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.wInversePopUp()}
              callback={() => {
                this.setState({ showInversePopUp: false });
              }}
              visibility={showInversePopUp}
            />
          ) : null}
          {showrPopUp ? (
            <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.rPopUp()}
              callback={() => {
                this.setState({ showrPopUp: false });
              }}
              visibility={showrPopUp}
            />
          ) : null}
          {showCmpPopUp ? (
            <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.comparingPopUp()}
              callback={() => {
                this.setState({ showCmpPopUp: false });
              }}
              visibility={showCmpPopUp}
            />
          ) : null}
          {showPaddingInfoPopUp ? (
            <AlertPopUp
              icon={InfoIcon}
              renderedBlocks={this.paddingInfoPopUp()}
              callback={() => {
                this.setState({ showPaddingInfoPopUp: false });
              }}
              visibility={showPaddingInfoPopUp}
            />
          ) : null}
          {showBlocks ? (
            <ScrollViewPopUp
              visibility={showBlocks}
              lockStateArr={decryptedArr}
              title="Decrypted Blocks"
              callback={() => {
                this.setState({
                  showBlocks: false,
                });
              }}
            />
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  lockState: state,
  trophyReveal: state.trophy.trophyReveal,
  trophyBreakWall: state.trophy.trophyBreakWall,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ALLOW_NEXT_PAGE_ACTION,
      NEXT_DECRYPT_PAGE_ACTION,
      UNLOCK_TROPHY_BREAK_WALL,
      UNLOCK_TROPHY_REVEAL,
      SHOW_TROPHY_ACTION,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecryptTutorial);
