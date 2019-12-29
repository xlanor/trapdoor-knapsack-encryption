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

// import stylesheet.
import styles from '../styles';

export default class page3 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Brief History of Trapdoor Knapsack</Text>

                <Text style={style.contentStyle}>
                    The trapdoor knapsack is also known as the <Text style={style.bold}>Merkle-Hellman knapsack cryptosystem</Text> and was invented by Ralph Merkle and Martin Hellman in 1978.
                    {"\n\n"}
                    The general idea behind this algorithm is to create <Text style={style.bold}>two</Text> separate problems - one of which is <Text style={style.bold}><Text style={style.underline}>easy to solve</Text></Text>, giving the private key, and the other being <Text style={style.bold}><Text style={style.underline}>difficult to solve</Text></Text>, giving a public key.
                    {"\n\n"}
                    This ensures that the private key is easy to use, but the public key is difficult to compute.
                    {"\n"}
                    As such, this functions as a “trapdoor”, ensuring that without proper knowledge of the trapdoor, the encryption <Text style={style.bold}>cannot easily be reversed</Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
