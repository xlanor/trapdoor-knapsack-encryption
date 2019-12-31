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
import { Dimensions } from 'react-native';
// import stylesheet.
import styles from '../styles';

export default class page1 extends Component {
    render() {
        let style = styles.PageStyle
        let u = Dimensions.get('window').height
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Knapsack Problem</Text>
                <Text style={style.contentStyle}>
                    Knapsack problem is derived from the notion of packing an odd assortment of packages into a container. How to pack a single container most efficiently or with the highest value.
                    {"\n"}
                </Text>
                <Image 
                    source={require('./Intro.gif')}  
                    style={{width: u * 0.400, height: u * 0.328, alignSelf:'center' }}
                />
                <Text style={style.contentStyle}>
                    {"\n"}
                    Example of a knapsack problem:{"\n"}
                    which boxes should be chosen to maximize the amount of money while still keeping the overall weight under or equal to 15kg?
                </Text>
            </View>
        )
    }
}
