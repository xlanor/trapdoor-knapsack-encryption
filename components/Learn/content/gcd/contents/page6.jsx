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

export default class page6 extends Component {
    render() {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                <Image
                    source={require('./pic/NormalT4.png')}
                    style={{ width: u * 0.414 * m, height: u * 0.165 * m, alignSelf: 'center' }}
                />
                <Text style={style.contentStyle}>
                    Fill in the rest.{"\n"}
                    Once r = 0, Stop.{"\n"}
                    Now look at the last value of b.{"\n"}
                    Since b = 1, GCD(282, 23) = 1.
                </Text>
            </View>
        )
    }
}
