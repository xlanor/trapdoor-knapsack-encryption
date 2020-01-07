import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
// import stylesheet.
import styles from '../styles';

export default class page7 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    The point of this algorithm is to find out whether there is a multiplicative inverse and what value it is.
                    {"\n\n"}
                    It is an extension of the standard euclidean algorithm.
                </Text>
            </View>
        )
    }
}
