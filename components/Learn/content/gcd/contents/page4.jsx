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

export default class page4 extends Component {
    render() {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                <Image
                    source={require('./pic/NormalT2.png')}
                    style={{ width: u * 0.414 * m, height: u * 0.165 * m, alignSelf: 'center' }}
                />
                <Text style={style.contentStyle}>
                    Calculate the values of q and r.
                    282 / 23 = 12 r6.
                    Set r as 6 and q as 12.
                </Text>
            </View>
        )
    }
}
