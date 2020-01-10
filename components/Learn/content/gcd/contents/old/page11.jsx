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

export default class page11 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
          
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/ET5.png')}
                        style={style.imgStyle}
                    />
                </View>

                <Text style={style.contentStyle}>
                    Remember the following fomulas:{"\n"}
                    a1 = a2, a2 = a1 - q * a2{"\n"}
                    b1 = b2, b2 = b1 - q * b2
                    {"\n\n"}
                    Calculate a2 and b2 with the formula above.{"\n"}
                    Notice all the values shifting left?
                </Text>
            </View>
        )
    }
}
