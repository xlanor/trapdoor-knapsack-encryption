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
// import stylesheet.
import styles from '../styles';

export default class page30 extends Component {
    render() {
        let img = './pic/EuclideanAnimationV3_28.png';
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    In each line referring to the value of the previous line:{"\n"}
                    a is the previous b, b is the previous r{"\n"}
                    a2 = a1 - q * a2{"\n"}
                    b2 = b1 - q * b2
                    {"\n\n"}
                </Text>
                <Text style={style.contentHead}>
                    Fill in each line till <Text style={style.highlight}>r = 0.</Text>
                </Text>
                <Image source={require(img)} style={styles.PicStyle.picStyle} />
                <Text style={style.contentHead}>
                    If your multiplier in this case is co-prime, look at b2.{"\n"}
                    > -49 is the inverse of multiplier
                    {"\n\n"}
                    If the value is positive there is no further steps.
                    In this case the value is negative.
                    {"\n\n"}
                    > 282 - 49 = 233 is the multiplicative inverse of 23 where the modulus is 282.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
