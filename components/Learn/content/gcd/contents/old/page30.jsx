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
        let img = './pic/EuclideanAnimationV3_27.png';        
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
                    At this line, if b is not 1 it means your multiplier is not co-prime to the modulus
                    and you have to pick another number.
                    {"\n\n"}
                    The <Text style={style.contentHead}>value of b</Text> in the last row is the gcd of
                    both your multiplier and modulus.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
