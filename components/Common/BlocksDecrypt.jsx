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


class BlockDecrypt extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const { 
        flexArr, 
        tableTitle, 
        tableData,
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
    console.log(this.props);
    return (
      <View style={styles.containerStyle}>
        <Text>Encrypted Value: {encryptedInput}</Text>
        <Text>Multiplied with Inverse {inverse}:</Text>
        <Text>Modulo by {modulo}: </Text>
        <Text>R: {rVal}</Text>
        <Table borderStyle={{borderWidth: 1}}>
          <TableWrapper style={styles.wrapperStyle}>
            <Col data={tableTitle} style={styles.titleStyle} heightArr={[28,28]} textStyle={styles.textStyle}/>
            <Rows data={[
                currentR, pubKey, postSub, binary, binaryOrdered
            ]} flexArr={flexArr} style={styles.rowStyle} textStyle={styles.textStyle}/>
          </TableWrapper>
        </Table>
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