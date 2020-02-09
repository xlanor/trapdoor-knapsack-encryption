import React, { Component } from 'react';
// RN imports
import { View, Text, Image, Dimensions } from 'react-native';

import PropTypes from 'react-proptypes';

// begin redux imports
import { connect } from 'react-redux';

// import stylesheet.
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';

// import Image assets
import EncryptionFormula from '../../../../../assets/images/EncryptionFormula.png';

class PageFour extends Component {
  render() {
    const {
      showCiphertextInfoPopUp,
      generateBinaryBlocks,
      setSpinner,
      binaryBlocks,
      encryptedText,
      padding,
      curPublicKeyString,
    } = this.props;
    const u = Dimensions.get('window').height;
    return (
      <>
        <Text style={styles.tutorial.contentStyle}>
          Now, compute{' '}
          <Text style={styles.tutorial.linkStyle} onPress={showCiphertextInfoPopUp}>
            ciphertext T
          </Text>{' '}
          using:
        </Text>
        <View style={{ height: u * 0.09, marginTop: u * 0.02, marginBottom: u * 0.02 }}>
          <Image source={EncryptionFormula} style={styles.tutorial.imgStyle} />
        </View>

        <Text style={styles.tutorial.contentStyle}>
          Your <Text style={styles.tutorial.publicKey}>public key b</Text>:{'\n'}
          {`${curPublicKeyString}\n`}
        </Text>
        <Text style={styles.tutorial.contentStyleSmall}>
          Binary values x are assigned into blocks and will add padding if there is a need.
          {'\n\n'}
          The following blocks chart out the process of obtaining ciphertext using{' '}
          <Text style={styles.tutorial.publicKey}>b</Text>.
        </Text>
        <View style={{ marginTop: u * 0.03 }}>
          {binaryBlocks.length !== 0 ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.tutorial.multipleButtonLeft}>
                <CustomButton text="Encrypt" callback={generateBinaryBlocks} />
              </View>

              <View style={styles.tutorial.multipleButtonRight}>
                <CustomButton text="Blocks" callback={setSpinner} buttonColor="blue" />
              </View>
            </View>
          ) : (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <CustomButton text="Encrypt" callback={generateBinaryBlocks} />
            </View>
          )}
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.tutorial.contentStyle}>
            <Text style={styles.tutorial.boldFont}>Current Padding:</Text> {encryptedText.length !== 0 ? padding : null}
          </Text>
          <Text style={styles.tutorial.contentStyle}>
            <Text style={styles.tutorial.boldFont}>Ciphertext:</Text>{' '}
            {encryptedText.length !== 0 ? encryptedText.join(', ') : null}
          </Text>
        </View>
      </>
    );
  }
}

PageFour.propTypes = {
  showCiphertextInfoPopUp: PropTypes.func.isRequired,
  generateBinaryBlocks: PropTypes.func.isRequired,
  setSpinner: PropTypes.func.isRequired,
  binaryBlocks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  encryptedText: PropTypes.string.isRequired,
  padding: PropTypes.number.isRequired,
  curPublicKeyString: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  binaryBlocks: state.encryption.binaryBlocks,
  encryptedText: state.encryption.encryptedText,
  padding: state.encryption.padding,
  curPublicKeyString: state.updateParameters.publicKeyString,
});

export default connect(mapStateToProps)(PageFour);
