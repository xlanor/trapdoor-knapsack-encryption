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

export default class page3 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    The extended euclidean algorithm is an extension to the highly efficient euclidean algorithm
                    which is used to find the greatest common denominator of 2 different integers.
                    {"\n\n"}
                    The point of learning extended euclidean is to be able to find the multiplicative inverse of
                    the multiplier for trapdoor knapsack.
                    {"\n\n"}
                    An easy way of doing the extended euclidean algorithm is by using a table.
                    {"\n\n"}
                    For this example, our multiplier is 23 and our modulus is 282.{"\n"}
                    Always place the modulus in column a and multiplier in column b as it allows you to see
                    a shifting pattern when u fill up the table.{"\n"}
                    The weights given to <Text style={style.bold}>a1, a2, b1, b2</Text> at the start is 1, 0, 0, 1{"\n"}
                    r is the remainder of <Text style={style.bold}>a</Text> divided by <Text style={style.bold}>b</Text> and <Text style={style.bold}>q</Text> is the quotient of this division
                    {"\n"}
                </Text>
            </View>
        )
    }
}
