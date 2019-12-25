import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Table,
    TableWrapper,
    Rows,
    Row,
    Col
} from 'react-native-table-component';

import HTML from 'react-native-render-html'

import styles from './styles'

class GCDPages extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, tableHead, tableData, text } = this.props;
        if (tableHead != null) {
            return (
                <ScrollView style={styles.GCDPages.containerStyle}>
                    <View style={styles.PicStyle.titleStyle}>
                        <HTML html={title} />
                    </View>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Row data={tableHead} style={styles.GCDPages.headerStyle} textStyle={styles.GCDPages.textStyle} />
                        <Rows data={tableData} textStyle={styles.GCDPages.textStyle} />
                    </Table>
                    <HTML html={text}
                        tagStyles={styles.GCDPages.tagStyle}
                    />
                </ScrollView>
            )
        } else {
            return (
                <ScrollView style={styles.GCDPages.containerStyle}>
                    <View style={styles.PicStyle.titleStyle}>
                        <HTML html={title} />
                    </View>
                    <HTML html={text}
                        tagStyles={styles.GCDPages.tagStyle}
                    />
                </ScrollView>
            )
        }
    }
}

export default GCDPages;