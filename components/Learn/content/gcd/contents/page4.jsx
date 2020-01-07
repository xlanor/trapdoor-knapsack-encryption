import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList,
    Dimensions
} from 'react-native';
// import stylesheet.
import styles from '../styles';

export default class page4 extends Component {
    render() {
        let img = './pic/EuclideanAnimationV3_1.png';
        let style = styles.GCDPages
        let u = Dimensions.get('window').width

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
                <Image
                    source={require(img)}
                    style={{ width: u * 0.9, height: u * 0.3, alignSelf: 'center', resizeMode: 'stretch', backgroundColor: '#aaa' }}
                />
            </View>
        )
    }
}
