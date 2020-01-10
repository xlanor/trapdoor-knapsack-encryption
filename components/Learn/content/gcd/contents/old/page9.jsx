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

export default class page9 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/ET3.png')}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    For simplicity we are going to reuse the same 2 values, 282 and 23.{"\n\n"}
                    Now for the remaining boxes remember the weights{"\n"}
                    a1 = 1{"\n"}
                    a2 = 0{"\n"}
                    b1 = 0{"\n"}
                    b2 = 1
                </Text>
            </View>
        )
    }
}
