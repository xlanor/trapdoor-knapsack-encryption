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

export default class page3 extends Component {
    render() {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                <Image
                    source={require('./pic/NormalT1.png')}
                    style={{ width: u * 0.220 * m, height: u * 0.165 * m, alignSelf: 'center' }}
                />
                <Text style={style.contentStyle}>
                    Lets say we want to find the GCD of 23 and 282.
                    {"\n\n"}
                    Always set a as the larger number and b as the smaller number.{"\n"}
                    So set a to 282 and b to 23.
                </Text>
            </View>
        )
    }
}
