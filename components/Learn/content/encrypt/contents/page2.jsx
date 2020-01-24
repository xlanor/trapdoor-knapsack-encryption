import React, { Component } from 'react';
// RN imports
import { 
    View,
    Text,
    Dimensions
} from 'react-native';

import PropTypes from 'react-proptypes'
// React-Native Table Imports
import {
    Table,
    TableWrapper,
    Rows,
    Col
  } from 'react-native-table-component';


// import stylesheet.
import styles from '../styles';


class PageTwo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Text style={styles.tutorial.contentStyle}>
                    However, there might be cases where binary cannot be divided into equal blocks according to{" "}
                    <Text style={styles.tutorial.knapsackSizeStyle}>knapsack size n</Text>
                    {" "}to correspond to{" "}
                    <Text style={styles.tutorial.publicKey}>public key b</Text>.
                </Text>
                <Text 
                    style={{
                        ...styles.tutorial.contentStyleSmall,
                        ...styles.tutorial.encryptTextGray,
                        marginTop: Dimensions.get('window').height * 0.02
                    }}
                >
                    E.g:{"\n"}
                    Public key b: (22, 16, 32) where n = 3{"\n"}
                    Message: a, ASCII of a = 97{"\n"}
                    Binary of 97: '0110 0001'{"\n"}
                    Binary length / n: 8 / 3 = 3 (rounded up)
                </Text>

                <View style={styles.tutorial.tableView}>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <TableWrapper style={{ flexDirection: 'row' }}>
                        <Col
                            data={[<Text style={styles.tutorial.tablePublicKeyValue}>b</Text>, 'x']}
                            style={{ flex: 1, backgroundColor: '#f6f8fa' }}
                            heightArr={[28, 28]}
                            textStyle={styles.tutorial.tableHeaderValue} />
                        <Rows data={[
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
                            textStyle={styles.tutorial.tableHeaderValue} />
                        <Rows data={[
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
                            textStyle={styles.tutorial.tableHeaderValue} />
                        <Rows data={[
                            ['22', '16', '32'],
                            ['0', '1', <Text style={styles.tutorial.tableUnknownValue}>?</Text>],
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

export default PageTwo;