/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';

import PropTypes from 'prop-types';

import { blocks as styles } from './styles';

class BlockDecrypt extends Component {
  render() {
    const {
      flexArr,
      tableTitle,
      encryptedInput,
      inverse,
      modulo,
      currentR,
      pubKey,
      postSub,
      binary,
      binaryOrdered,
      rVal,
    } = this.props;
    return (
      <View style={{ ...styles.containerStyle }}>
        <Text style={{ fontFamily: 'comfortaa', textAlign: 'center' }}>
          R: {rVal}
          {'\n'}
          Modulo by: {modulo}
          {'\n'}
          Encrypted Value: {encryptedInput}
          {'\n'}
          Multiplied with Inverse ({inverse}): {Number(encryptedInput) * inverse}
          {'\n'}
        </Text>
        <ScrollView horizontal>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={styles.wrapperStyle}>
              <Col data={tableTitle} style={styles.titleStyle} heightArr={[28, 28]} textStyle={styles.textStyle} />
              <Rows
                data={[currentR, pubKey, postSub, binary, binaryOrdered]}
                widthArr={flexArr}
                style={styles.rowStyle}
                textStyle={styles.textStyle}
              />
            </TableWrapper>
          </Table>
        </ScrollView>
      </View>
    );
  }
}

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

export default BlockDecrypt;
