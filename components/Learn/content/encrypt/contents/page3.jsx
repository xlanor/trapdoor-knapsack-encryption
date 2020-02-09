import React, { Component } from 'react';
// RN imports
import { View, Text, Dimensions } from 'react-native';

import PropTypes from 'react-proptypes';
// React-Native Table Imports
import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';

// import stylesheet.
import styles from '../styles';

class PageThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const u = Dimensions.get('window').height;
    const { showPaddingInfoPopUp } = this.props;
    return (
      <>
        <Text style={styles.tutorial.contentStyle}>
          The solution to it is to add{' '}
          <Text style={styles.tutorial.linkStyle} onPress={showPaddingInfoPopUp}>
            padding
          </Text>
        </Text>
        <Text style={{ ...styles.tutorial.contentStyle, marginTop: u * 0.02 }}>To get padding value:</Text>
        <Text style={{ ...styles.tutorial.contentStyleSmall, marginLeft: u * 0.03 }}>
          - Remainder = binary length % n{'\n'}- If the remainder is 0, padding = 0{'\n'}- If the remainder is not 0,
          padding = n minus remainder
        </Text>
        <Text
          style={{
            ...styles.tutorial.contentStyleSmall,
            ...styles.tutorial.encryptTextGray,
            marginTop: u * 0.01,
          }}
        >
          E.g:{'\n'}
          Remainder = 8 % 3 = 2{'\n'}
          Padding = 3 - 2 = 1{'\n'}
          Add 1 '0' to the back of the binary string x
        </Text>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col
                data={[<Text style={styles.tutorial.tablePublicKeyValue}>b</Text>, 'x']}
                style={{ flex: 1, backgroundColor: '#f6f8fa' }}
                heightArr={[28, 28]}
                textStyle={styles.tutorial.tableHeaderValue}
              />
              <Rows
                data={[
                  ['22', '16', '32'],
                  ['0', '1', '1'],
                ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col
                data={[<Text style={styles.tutorial.tablePublicKeyValue}>b</Text>, 'x']}
                style={{ flex: 1, backgroundColor: '#f6f8fa' }}
                heightArr={[28, 28]}
                textStyle={styles.tutorial.tableHeaderValue}
              />
              <Rows
                data={[
                  ['22', '16', '32'],
                  ['0', '0', '0'],
                ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col
                data={[<Text style={styles.tutorial.tablePublicKeyValue}>b</Text>, 'x']}
                style={{ flex: 1, backgroundColor: '#f6f8fa' }}
                heightArr={[28, 28]}
                textStyle={styles.tutorial.tableHeaderValue}
              />
              <Rows
                data={[
                  ['22', '16', '32'],
                  ['0', '1', <Text style={styles.tutorial.tableCorrectValue}>0</Text>],
                ]}
                flexArr={[1, 1, 1]}
                style={{ height: 28 }}
                textStyle={styles.tutorial.tableValue}
              />
            </TableWrapper>
          </Table>
        </View>
      </>
    );
  }
}
PageThree.propTypes = {
  showPaddingInfoPopUp: PropTypes.func.isRequired,
};

export default PageThree;
