import React, { Component } from 'react';
// RN imports
import { View, Text, Dimensions } from 'react-native';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import stylesheet.
import PropTypes from 'prop-types';
import styles from '../styles';

// import our own components
import CustomButton from '../../../../Common/Button';

// typecheck

class PageFour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { curMultiplier, curInverse, loadInverse, inverseLoaded } = this.props;
    const u = Dimensions.get('window').height;
    return (
      <View>
        <Text style={styles.page1.contentStyle}>
          Calculate the <Text style={{ ...styles.page1.inverseStyle, ...styles.page1.boldFont }}>modular inverse</Text>{' '}
          of your{' '}
          <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>
            multiplier w({curMultiplier})
          </Text>
          :
        </Text>
        <Text style={{ ...styles.page1.contentStyle, marginTop: u * 0.02 }}>
          (Using Extended Euclidean's algorithm)
          {'\n\n'}
          This is needed for decryption
          {'\n\n'}
          Eg: <Text style={{ ...styles.page1.inverseStyle, ...styles.page1.boldFont }}>Inverse</Text> of 11 mod 39 = 32
          (32 - -7 + 39)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            margin: u * 0.05,
          }}
        >
          <CustomButton text="Gen Inverse" callback={loadInverse} />
        </View>

        {inverseLoaded ? (
          <Text style={styles.page1.contentStyle}>
            The <Text style={{ ...styles.page1.inverseStyle, ...styles.page1.boldFont }}>modular inverse</Text> of your{' '}
            <Text style={{ ...styles.page1.multiplierStyle, ...styles.page1.boldFont }}>
              multiplier w({curMultiplier})
            </Text>
            : {curInverse}
          </Text>
        ) : null}
      </View>
    );
  }
}

PageFour.propTypes = {
  loadInverse: PropTypes.func.isRequired,
  inverseLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  curMultiplier: state.updateParameters.multiplier,
  curInverse: state.updateParameters.inverse,
});

export default connect(mapStateToProps)(PageFour);
