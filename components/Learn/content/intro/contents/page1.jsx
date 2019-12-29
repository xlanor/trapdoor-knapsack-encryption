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
import { ScrollView } from 'react-native-gesture-handler';

// import stylesheet.
import styles from '../styles';

export default class page1 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Knapsack Problem</Text>
                <Text style={style.contentStyle}>
                    Knapsack problem is derived from the notion of packing an odd assortment of packages into a container or in other words,
                    how to pack a single container <Text style={style.bold}>most efficiently or <Text style={style.underline}>with the highest value</Text></Text>
                    {"\n\n"}
                    An example of a knapsack problem: What boxes should be chosen to <Text style={style.bold}>maximize</Text> the amount of money
                    while still keeping the overall weight <Text style={style.bold}>under or equal</Text> to 15 kg?
                    {"\n"}
                </Text>
            </View>
        )
    }
}
