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

export default class page8 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                
                
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/ET1.png')}
                        style={style.imgStyle}
                    />
                </View>

                <Text style={style.contentStyle}>
                    With the Extended Euclidean algorithm, the easiest way to visualise it is via a table.
                    {"\n\n"}
                    Construct a table like the original Euclidean algorithm but with 4 more columns
                </Text>
            </View>
        )
    }
}
