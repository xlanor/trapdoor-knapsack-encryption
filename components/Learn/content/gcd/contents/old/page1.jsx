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
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    The Euclidean algorithm is an efficient method of finding the Greatest Common Divisor(GCD)
                    of 2 different integers.
                    {"\n\n"}
                    Usually when someone asks for a notation such as gcd(a, b) = x{"\n"}
                    They are asking what is the GCD of a and b.
                </Text>
            </View>
        )
    }
}
