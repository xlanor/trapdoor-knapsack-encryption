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

export default class page1 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>GCD and Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    The greatest common divisor (GCD) of two integers n1 and n2,
                    which are not all zero, is the largest positive integer that divides n1 and n2.
                    {"\n\n"}
                    It is denoted gcd(n1, n2)
                    {"\n\n"}
                    For example:{"\n"}
                    gcd(30, 15)  = 15{"\n"}
                    gcd(30, -12) = 6
                    {"\n\n"}
                    We can calculate the gcd using Euclidean algorithm.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
