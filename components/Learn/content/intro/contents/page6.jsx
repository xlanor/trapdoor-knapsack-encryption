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
                    A <Text style={style.publicKey}>public key</Text> is generated by multiplying each element of the superincreasing knapsack with the <Text style={style.multiplier}>multiplier</Text> and <Text style={style.modulus}>modulus</Text> to get a difficult knapsack.
                    Since the <Text style={style.publicKey}>public key</Text> is no longer in a superincreasing sequence, there are multiple solutions to a single ciphertext therefore making it difficult to decipher.
                    {"\n\n"}
                    This <Text style={style.publicKey}>public key</Text> is then given to a person who wishes to send an encrypted text to the owner.
                    {"\n"}
                    This person will then encrypt his message using the <Text style={style.publicKey}>public key</Text> and send it back to the owner.
                    {"\n"}
                    The owner with the <Text style={style.privateKey}>private key</Text> will be able to decrypt and get the original message.
                    A detailed example will be given as you progress further.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
