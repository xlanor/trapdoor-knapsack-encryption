import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

// import stylesheet.
import styles from '../styles';

export default class page3 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Brief History of Trapdoor Knapsack</Text>
                <Text style={style.contentStyle}>
                    The trapdoor knapsack is also known as the Merkle-Hellman knapsack cryptosystem and was invented by Ralph Merkle and Martin Hellman in 1978.
                    {"\n\n"}
                    The general idea behind this algorithm is to create two separate problems - one of which is easy to solve, giving the private key, and the other being difficult to solve, giving a public key.
                    {"\n\n"}
                    This ensures that the private key is easy to use, but the public key is difficult to compute.
                    {"\n"}
                    As such, this functions as a “trapdoor”, ensuring that without proper knowledge of the trapdoor, the encryption cannot easily be reversed.
                    However Trapdoor knapsack has been broken.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
