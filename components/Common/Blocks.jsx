import React, { Component } from 'React';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

import { 
  Table, 
  TableWrapper, 
  Rows, 
  Row, 
  Col } 
from 'react-native-table-component';


import PropTypes from 'prop-types'

import { blocks as styles } from './styles'


class Block extends Component{
  constructor(props){
    super(props);
  }

  multiplyTwoArrays = ( array1, array2 ) => {
    let returnArr = []
    for(let i = 0; i < array1.length; i++){
      returnArr[i] = array1[i] * array2[i]
    }
    return returnArr
  } 
  //new Array(tableData.length).fill('')
  constructRowData = () => {
    const { tableData, currentPublicKey, tableType } = this.props;
    let rArr =  tableType === "binary" ?
          [ currentPublicKey, tableData, this.multiplyTwoArrays(currentPublicKey,tableData) ]
        : [currentPublicKey, tableData ]
    return rArr
  }
  render(){
    const { flexArr, tableTitle, } = this.props;
    return (
      <View style={styles.containerStyle}>
        <Table borderStyle={{borderWidth: 1}}>
          <TableWrapper style={styles.wrapperStyle}>
            <Col data={tableTitle} style={styles.titleStyle} heightArr={[28,28]} textStyle={styles.textStyle}/>
            <Rows data={this.constructRowData()} flexArr={flexArr} style={styles.rowStyle} textStyle={styles.textStyle}/>
          </TableWrapper>
        </Table>
      </View>
    );
  }
}


Block.propTypes = {
  flexArr: PropTypes.array.isRequired,
  tableTitle: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  currentPublicKey: PropTypes.array.isRequired,
  tableType:PropTypes.string.isRequired,
};

export default Block;