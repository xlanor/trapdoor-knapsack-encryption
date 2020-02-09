import React, { Component } from 'React';
import { View, Text, ScrollView } from 'react-native';

import { Table, TableWrapper, Rows, Col } from 'react-native-table-component';

import PropTypes from 'prop-types';

import { blocks as styles } from './styles';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: -1,
    };
  }

  multiplyTwoArrays = (array1, array2) => {
    const returnArr = [];
    for (let i = 0; i < array1.length; i+=1) {
      returnArr[i] = array1[i] * array2[i];
    }
    return returnArr;
  };

  constructRowData = () => {
    const { tableData, currentPublicKey, tableType } = this.props;
    const rArr =
      tableType === 'binary'
        ? [currentPublicKey, tableData, this.multiplyTwoArrays(currentPublicKey, tableData)]
        : [currentPublicKey, tableData];

    return rArr;
  };

  render() {
    const { total } = this.state;
    const { widthArr, tableTitle, tableData, currentPublicKey, tableType, blockNo } = this.props;
    return (
      <View style={styles.containerStyle}>
        <View style={styles.blockTitleView}>
          {blockNo ? <Text style={styles.textStyle}>Block #{blockNo}</Text> : null}
        </View>
        <ScrollView horizontal>
          <Table borderStyle={{ borderWidth: 1 }}>
            <TableWrapper style={styles.wrapperStyle}>
              <Col
                data={tableTitle}
                style={styles.titleStyle}
                heightArr={[28, 28, 28]}
                textStyle={styles.headerTextStyle}
              />
              <Rows
                data={this.constructRowData()}
                widthArr={widthArr}
                style={styles.rowStyle}
                textStyle={styles.textStyle}
              />
            </TableWrapper>
          </Table>
        </ScrollView>
        <View style={styles.blockTotalView}>
          {tableType == 'binary' ? (
            <Text style={styles.textStyle}>
              Block Total:
              {` ${this.multiplyTwoArrays(currentPublicKey, tableData).reduce((a, b) => a + b, 0)}`}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }
}

Block.propTypes = {
  tableTitle: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  currentPublicKey: PropTypes.array.isRequired,
  tableType: PropTypes.string.isRequired,
  blockNo: PropTypes.number,
};

export default Block;
