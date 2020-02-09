import React, { Component } from 'react';
// RN imports
import { TouchableWithoutFeedback, View, Text, Image, Keyboard, Dimensions } from 'react-native';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import stylesheet.
import PropTypes from 'prop-types';
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';

// typecheck

// import images
import bFormula from '../../../../../assets/images/bFormula.png';

class PageFive extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const u = Dimensions.get('window').height;
    const {
      showKeyMultiplicationInfoPopUp,
      generatePubKey,
      curPrivateKeyString,
      curPublicKeyString,
      curMultiplier,
      curModulo,
      curInverse,
      pkLoaded,
    } = this.props;
    return (
      <>
        <Text style={styles.page1.contentStyle}>
          Compute the <Text style={{ ...styles.page1.publicKeyStyle, ...styles.page1.boldFont }}>public key b</Text>:
        </Text>
        <View style={{ height: u * 0.035, marginTop: u * 0.03, marginBottom: u * 0.03 }}>
          <Image source={bFormula} style={styles.page1.imgStyle} />
        </View>

        <Text style={styles.page1.contentStyleSmall}>
          <Text style={styles.page1.linkStyle} onPress={showKeyMultiplicationInfoPopUp}>
            For every element
          </Text>{' '}
          in <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>a</Text>, multiply it by the{' '}
          <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>multiplier w</Text> you chose in
          step 3 and get the remainder when divided by the{' '}
          <Text style={{ ...styles.page1.modulusStyle, ...styles.page1.boldFont }}>modulo m</Text> you chose in step 2
        </Text>
        <Text style={{ ...styles.page1.contentStyle, ...styles.page1.boldFont, marginTop: u * 0.03 }}>
          <Text style={styles.page1.privateKeyStyle}>Private key a</Text>: {curPrivateKeyString}
          {'\n'}
          <Text style={styles.page1.multiplierStyle}>Multiplier w</Text>: {curMultiplier}
          {'\n'}
          <Text style={styles.page1.modulusStyle}>Modulus m</Text>: {curModulo}
          {'\n'}
          <Text style={styles.page1.inverseStyle}>Modular Inverse w^-1</Text>: {curInverse}
        </Text>

        <View
          style={{ flexDirection: 'row', justifyContent: 'center', margin: Dimensions.get('window').height * 0.05 }}
        >
          <CustomButton text="Gen Public Key" callback={generatePubKey} />
        </View>

        {pkLoaded ? (
          <Text style={styles.page1.contentStyle}>
            <Text style={{ ...styles.page1.publicKeyStyle, ...styles.page1.boldFont }}>Public key b</Text>:{' '}
            {curPublicKeyString}
          </Text>
        ) : null}
      </>
    );
  }
}

PageFive.propTypes = {
  showKeyMultiplicationInfoPopUp: PropTypes.func.isRequired,
  generatePubKey: PropTypes.func.isRequired,
  pkLoaded: PropTypes.bool.isRequired,
};
const mapStateToProps = state => ({
  curPublicKeyString: state.updateParameters.publicKeyString,
  curPrivateKeyString: state.updateParameters.privateKeyString,
  curMultiplier: state.updateParameters.multiplier,
  curModulo: state.updateParameters.modulo,
  curInverse: state.updateParameters.inverse,
});

export default connect(mapStateToProps)(PageFive);
