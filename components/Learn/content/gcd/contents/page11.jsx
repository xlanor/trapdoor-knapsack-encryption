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
                        source={require('./pic/ET6.png')}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    Repeat for the remaining rows.
                    {"\n\n"}
                    Stop when <Text style={style.highlight}>
                        r = 0
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
