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

export default class page10 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/ET4.png')}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    Remember the following fomulas:{"\n"}
                    a1 = a2, a2 = a1 - q * a2{"\n"}
                    b1 = b2, b2 = b1 - q * b2
                    {"\n\n"}
                    Fill in the next row like in the standard Euclidean algorithm.
                    {"\n\n"}
                    Now to get a1 and b1,
                    look at the previous row's a2 and b2 respectively.
                </Text>
            </View>
        )
    }
}
