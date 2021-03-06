import React, { Component } from 'react';
// RN imports
import { TouchableWithoutFeedback, View, Text, TextInput, Keyboard, Dimensions } from 'react-native';

// begin redux imports
import { connect } from 'react-redux';

// import stylesheet.
import PropTypes from 'prop-types';
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';

// typecheck

class PageTwo extends Component {
  render() {
    const u = Dimensions.get('window').height;
    const {
      showModulusInfoPopUp,
      setModulo,
      validateModulus,
      keyboardVisiblity,
      privateKeySum,
      currentModulo,
    } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={keyboardVisiblity ? { ...styles.page1.keyboardAvoidingViewMargin } : null}>
          <Text style={styles.page1.contentStyle}>
            Choose your <Text style={{ ...styles.page1.modulusStyle, ...styles.page1.boldFont }}>modulus m</Text>:
            {'\n\n'}
            Sum of <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>a</Text>: {privateKeySum}
          </Text>
          <Text style={{ marginTop: u * 0.02, ...styles.page1.contentStyle }}>
            (<Text style={{ ...styles.page1.modulusStyle, ...styles.page1.boldFont }}>m</Text> should be{' '}
            <Text style={styles.page1.linkStyle} onPress={showModulusInfoPopUp}>
              bigger than the sum
            </Text>{' '}
            of <Text style={{ ...styles.page1.privateKeyStyle, ...styles.page1.boldFont }}>a</Text>)
          </Text>
          <View style={{ marginTop: Dimensions.get('window').height * 0.03 }}>
            <TextInput
              defaultValue={currentModulo === 0 ? null : currentModulo.toString()}
              onSubmitEditing={Keyboard.dismiss}
              keyboardType="numeric"
              style={styles.page1.textBoxStyle}
              onChangeText={text => {
                setModulo(text);
              }}
            />
            <View style={styles.page1.buttonRow}>
              <CustomButton text="Validate" callback={validateModulus} />
            </View>
          </View>
          {currentModulo === 0 ? null : (
            <Text style={styles.page1.contentStyle}>
              <Text style={{ ...styles.page1.modulusStyle, ...styles.page1.boldFont }}>Modulus m</Text>:{' '}
              {currentModulo.toString()}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

PageTwo.propTypes = {
  showModulusInfoPopUp: PropTypes.func.isRequired,
  setModulo: PropTypes.func.isRequired,
  validateModulus: PropTypes.func.isRequired,
  keyboardVisiblity: PropTypes.bool.isRequired,
  privateKeySum: PropTypes.number.isRequired,
  currentModulo: PropTypes.number.isRequired,
};
const mapStateToProps = state => ({
  privateKeySum: state.updateParameters.privateKeySum,
  currentModulo: state.updateParameters.modulo,
});

export default connect(mapStateToProps)(PageTwo);
