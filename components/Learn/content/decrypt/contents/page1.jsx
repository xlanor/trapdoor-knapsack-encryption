import React, { Component } from 'react';
// RN imports
import { View, Text, Image, Dimensions } from 'react-native';
import PropTypes from 'react-proptypes';
// begin redux imports
import { connect } from 'react-redux';

// import stylesheet.
import styles from '../styles';

// import images
import DF1 from '../../../../../assets/images/DecryptionFormula_1.png';
import DF2 from '../../../../../assets/images/DecryptionFormula_2.png';

class PageOne extends Component {
  render() {
    const u = Dimensions.get('window').height;
    const { showInversePopUp, showrPopUp, showCmpPopUp, encryptedText, padding } = this.props;
    return (
      <>
        <Text style={{ ...styles.tutorial.contentStyle, ...styles.tutorial.boldFont }}>The current ciphertext is:</Text>
        <Text style={styles.tutorial.contentStyle}>({encryptedText.join(', ')})</Text>

        <Text style={{ ...styles.tutorial.contentStyle, marginTop: u * 0.01 }}>
          <Text style={styles.tutorial.boldFont}>Padding:</Text> {padding}
        </Text>
        <View style={{ height: u * 0.04, marginTop: u * 0.02, marginBottom: u * 0.02 }}>
          <Image source={DF1} style={styles.tutorial.imgStyle} />
        </View>
        <Text style={styles.tutorial.contentStyle}>
          Use the{' '}
          <Text
            style={{ ...styles.tutorial.linkStyle, ...styles.tutorial.boldFont, ...styles.tutorial.inverseStyle }}
            onPress={showInversePopUp}
          >
            modular inverse w^-1
          </Text>{' '}
          to calculate{' '}
          <Text style={{ ...styles.tutorial.linkStyle, ...styles.tutorial.boldFont }} onPress={showrPopUp}>
            R
          </Text>
          .
        </Text>

        <Text style={styles.tutorial.contentStyle}>
          Use the <Text style={styles.tutorial.privateKey}>private key a</Text> to find binary x since
        </Text>

        <View style={{ height: u * 0.03, marginTop: u * 0.02, marginBottom: u * 0.02 }}>
          <Image source={DF2} style={styles.tutorial.imgStyle} />
        </View>

        <Text style={styles.tutorial.contentStyle}>
          Then by{' '}
          <Text style={styles.tutorial.linkStyle} onPress={showCmpPopUp}>
            comparing with a to calculate to obtain the binary value x
          </Text>
        </Text>

        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.02, marginTop: u * 0.01 }}>
          - Select the largest a which is {'<='} <Text style={styles.tutorial.boldFont}>R</Text>:
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.04 }}>
          - If it is true, then the corresponding x = 1{'\n'}- If false, then x = 0
        </Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.02 }}>
          - Since the next largest a {'<='} the difference, repeat until the difference is 0
        </Text>
        <Text style={{ ...styles.tutorial.contentStyle, marginTop: u * 0.02 }}>
          Since the knapsack is super-increasing it is comparatively easier to get the binary values
        </Text>
      </>
    );
  }
}
PageOne.propTypes = {
  showInversePopUp: PropTypes.func.isRequired,
  showrPopUp: PropTypes.func.isRequired,
  showCmpPopUp: PropTypes.func.isRequired,
  encryptedText: PropTypes.string.isRequired,
  padding: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  encryptedText: state.encryption.encryptedText,
  padding: state.encryption.padding,
});

export default connect(mapStateToProps)(PageOne);
