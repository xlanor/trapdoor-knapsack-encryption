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

export default class page10 extends Component {
    render() {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                <Image
                    source={require('./pic/ET5.png')}
                    style={{ width: u * 0.414 * m, height: u * 0.165 * m, alignSelf: 'center' }}
                />
                <Text style={style.contentStyle}>
                    Remember the following fomulas:{"\n"}
                    a1 = a2, a2 = a1 - q * a2{"\n"}
                    b1 = b2, b2 = b1 - q * b2
                    {"\n\n"}
                    Fill in the next row like in the standard Euclidean algorithm.{"\n"}
                    Now to get a1 and b1,
                    look at the previous row's a2 and b2 respectively.
                </Text>
            </View>
        )
    }
}
