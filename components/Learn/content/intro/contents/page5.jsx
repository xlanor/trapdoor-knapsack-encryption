import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
import Info from '../../../../../assets/images/InfoIcon.png';
// import stylesheet.
import styles from '../styles';

export default class page5 extends Component {
  constructor(props) {
    super(props);

    // local state not affected by redux
    this.state = {
      showPrivateKeyInfoPopUp: false,
      showModulusInfoPopUp: false,
      showMultiplierInfoPopUp: false,
      showSecretKeyInfoPopUp: false,
    };
  }

  privateKeyInfoPopUp = () => {
    return (
      <>
        <Text style={styles.PageStyle.popUpTextStyle}>
          The <Text style={{ ...styles.PageStyle.privateKey, ...styles.PageStyle.bold }}>private key</Text> is a{' '}
          <Text style={styles.PageStyle.bold}>superincreasing knapsack</Text> to ensure there will only be one answer to
          a ciphertext.
        </Text>
      </>
    );
  };

  modulusInfoPopUp = () => {
    return (
      <>
        <Text style={styles.PageStyle.popUpTextStyle}>
          The <Text style={{ ...styles.PageStyle.modulus, ...styles.PageStyle.bold }}>modulus</Text> chosen is a random
          integer larger than the sum of elements in the knapsack. This ensures the uniqueness of the ciphertext and
          plaintext pairs.
        </Text>
      </>
    );
  };

  multiplierInfoPopUp = () => {
    return (
      <>
        <Text style={styles.PageStyle.popUpTextStyle}>
          The <Text style={{ ...styles.PageStyle.multiplier, ...styles.PageStyle.bold }}>multiplier</Text> chosen is a
          co-prime to the <Text style={{ ...styles.PageStyle.modulus, ...styles.PageStyle.bold }}>modulus</Text>, so
          that a <Text style={{ ...styles.PageStyle.inverseStyle, ...styles.PageStyle.bold }}>modular inverse</Text> can
          be found.
        </Text>
      </>
    );
  };

  secretKeyInfoPopUp = () => {
    return (
      <>
        <Text style={styles.PageStyle.popUpTextStyle}>
          The <Text style={{ ...styles.PageStyle.secretKey, ...styles.PageStyle.bold }}>secret key</Text> is a piece of
          information or parameter that is used to decrypt ciphertext during trapdoor knapsack.
        </Text>
      </>
    );
  };

  render() {
    const {
      showPrivateKeyInfoPopUp,
      showModulusInfoPopUp,
      showMultiplierInfoPopUp,
      showSecretKeyInfoPopUp,
    } = this.state;
    const style = styles.PageStyle;
    const u = Dimensions.get('window').height;

    return (
      <View style={style.containerStyle}>
        {showPrivateKeyInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.privateKeyInfoPopUp()}
            callback={() => {
              this.setState({ showPrivateKeyInfoPopUp: false });
            }}
            visibility={showPrivateKeyInfoPopUp}
          />
        ) : null}
        {showModulusInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.modulusInfoPopUp()}
            callback={() => {
              this.setState({ showModulusInfoPopUp: false });
            }}
            visibility={showModulusInfoPopUp}
          />
        ) : null}
        {showMultiplierInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.multiplierInfoPopUp()}
            callback={() => {
              this.setState({ showMultiplierInfoPopUp: false });
            }}
            visibility={showMultiplierInfoPopUp}
          />
        ) : null}
        {showSecretKeyInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.secretKeyInfoPopUp()}
            callback={() => {
              this.setState({ showSecretKeyInfoPopUp: false });
            }}
            visibility={showSecretKeyInfoPopUp}
          />
        ) : null}
        <Text style={style.titleStyle}>Introduction</Text>
        <Text style={style.contentHead}>Trapdoor Knapsack Description</Text>

        <Text style={style.contentStyle}>
          Trapdoor knapsack is basically formed around 3 different key information:
        </Text>
        <Text style={{ ...style.contentStyle, marginTop: u * 0.01, marginLeft: u * 0.04 }}>
          1.{' '}
          <Text
            style={{ ...style.privateKey, ...style.underline }}
            onPress={() => {
              this.setState({ showPrivateKeyInfoPopUp: true });
            }}
          >
            Private Key
          </Text>
        </Text>
        <Text style={{ ...style.contentStyle, marginTop: u * 0.01, marginLeft: u * 0.04 }}>
          2.{' '}
          <Text
            style={{ ...style.modulus, ...style.underline }}
            onPress={() => {
              this.setState({ showModulusInfoPopUp: true });
            }}
          >
            Modulus
          </Text>
        </Text>
        <Text style={{ ...style.contentStyle, marginTop: u * 0.01, marginLeft: u * 0.04 }}>
          3.{' '}
          <Text
            style={{ ...style.multiplier, ...style.underline }}
            onPress={() => {
              this.setState({ showMultiplierInfoPopUp: true });
            }}
          >
            Multiplier
          </Text>
        </Text>
        <Text style={{ ...style.contentStyle, marginTop: u * 0.04 }}>
          Everything else is derived from these 3 pieces of information.
          {'\n\n'}
          These three are kept as the{' '}
          <Text
            style={{ ...style.secretKey, ...style.underline }}
            onPress={() => {
              this.setState({ showSecretKeyInfoPopUp: true });
            }}
          >
            secret key
          </Text>{' '}
          by the owner and not distributed.
          {'\n'}
        </Text>
      </View>
    );
  }
}
