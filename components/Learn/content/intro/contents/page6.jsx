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

export default class page6 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Trapdoor Knapsack Description</Text>

                <Text style={style.contentStyle}>
                    A <Text style={style.keyword}>public key</Text> is generated by multiplying each element of the superincreasing knapsack with the multiplier and modulus to get a difficult knapsack.
                    Since the public key is no longer in a superincreasing sequence, there are multiple solutions to a single ciphertext therefore making it difficult to decipher.
                    {"\n\n"}
                    This public key is then given to a person who wishes to send an encrypted text to the owner.
                    {"\n"}
                    This person will then encrypt his message using the public key and send it back to the owner.
                    {"\n"}
                    The owner with the private key will be able to decrypt and get the original message.
                    A detailed example will be given as you progress further.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
