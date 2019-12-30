import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Linking
} from 'react-native';

// import stylesheet.
import styles from '../styles';

export default class page4 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>A brief History of how Trapdoor Knapsack was broken</Text>
                <Text style={style.contentStyle}>
                    In 1982 Leonard Adleman broke the cryptosystem.
                    {"\n"}
                    A quick reference to how he broke the system can be found in this link
                    {"\n"}
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29')}>
                    https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29
                    </Text>
                    {"\n\n"}
                    In the same year Adi Shamir the inventor of RSA cryptosystem that is still used today posted an article on an algorithm to break the cryptosystem
                    {"\n"}
                    <Text style={{color: 'blue'}}
                        onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/4568386')}>
                    https://ieeexplore.ieee.org/document/4568386
                    </Text>
                    {"\n\n"}
                    Merkle awarded the price to Brickell. This marked the end of the trapdoor knapsack cryptosystem.
                    {"\n\n"}
                    However, we can still learn from the concepts of cryptography from trapdoor knapsack as it is easy to understand compared to many other cryptographic systems.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
