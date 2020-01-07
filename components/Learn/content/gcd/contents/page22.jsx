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

export default class page22 extends Component {
    render() {
        let img = './pic/EuclideanAnimationV3_19.png';
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
                    Fill in each line till r = 0.
                </Text>
                <Image source={require(img)} style={styles.PicStyle.picStyle} />
            </View>
        )
    }
}
