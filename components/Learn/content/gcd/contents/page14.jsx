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

export default class page14 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/ET6.png')}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    b2 is -49 and therefore, the multiplicative inverse of 23 is -49 mod 282.{"\n"}
                    Since -49 is negative, 282 - 49 = 233.
                    {"\n\n"}
                    The multiplicative inverse of 23 is 233.
                </Text>
            </View>
        )
    }
}
