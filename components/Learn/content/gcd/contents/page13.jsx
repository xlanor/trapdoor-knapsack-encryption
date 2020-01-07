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

export default class page13 extends Component {
    render() {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                <Image
                    source={require('./pic/ET6.png')}
                    style={{ width: u * 0.414 * m, height: u * 0.165 * m, alignSelf: 'center' }}
                />
                <Text style={style.contentStyle}>
                    To find out the multiplicative inverse.{"\n"}
                    1. The GCD must be 1 like in this case.{"\n"}
                    2. Since 23 is under b, look at b2 final value.
                    {"\n\n"}
                    If you find that the gcd is not 1, there is no multiplicative inverse.{"\n"}
                    If you did the table differently and the value is under a then look at a2.
                </Text>
            </View>
        )
    }
}
