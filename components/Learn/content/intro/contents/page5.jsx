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

export default class page5 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Trapdoor Knapsack Description</Text>

                <Text style={style.contentStyle}>
                    Trapdoor knapsack is basically formed around 3 different key information, the private key, the multiplier and the modulus.
                    Everything else is derived from these 3 pieces of information.
                    {"\n\n"}
                    1. The private key is a superincreasing knapsack to ensure there will only be one answer to a ciphertext.
                    {"\n\n"}
                    2. The modulus chosen is a random integer larger than the sum of elements in the knapsack.
                    This ensures the uniqueness of the ciphertext and plaintext pairs.
                    {"\n\n"}
                    3. The multiplier chosen is a co-prime to the modulus, so that a multiplicative inverse can be found.
                    {"\n\n"}
                    These three are kept as the <Text style={style.keyword}>secret key</Text> by the owner and not distributed.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
