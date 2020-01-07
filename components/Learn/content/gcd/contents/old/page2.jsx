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

export default class page2 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>GCD and Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    Steps for Euclidean algorithm:
                    {"\n\n"}
                    1. Divide the larger number by the smaller and retain the remainder
                    {"\n\n"}
                    2. Divide the smaller original number by the remainder, again retaining the remainder.
                    {"\n\n"}
                    3. Continue dividing the prior remainder by the current remainder until the remainder is zero,
                    at which point the last (non-zero) remainder is the greatest common divisor.
                    {"\n\n"}
                    For Example:  gcd(84,49){"\n"}
                    84 / 49 => remainder 35{"\n"}
                    49 / 35 => remainder 14{"\n"}
                    35 / 14 => remainder 7{"\n"}
                    14 / 7 => remainder 0
                    {"\n\n"}
                    Therefore gcd(84/49) = 7.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
