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
  constructRowData = () => {
    const { tableData, currentPublicKey, tableType } = this.props;
    let rArr =  tableType === "binary" ?
          [ currentPublicKey, tableData, new Array(tableData.length).fill('')]
        : [currentPublicKey, tableData ]
    return rArr
  }
  render(){
    const { flexArr, tableTitle, tableData, currentPublicKey } = this.props;
    console.log("Flex arr"+flexArr)
    console.log("Table title"+ tableTitle)
    console.log("Table Data "+tableData)
    console.log( styles )
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