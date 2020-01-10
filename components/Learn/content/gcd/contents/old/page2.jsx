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

export default class page2 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/NormalT0.png')}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    With the Euclidean algorithm, the easiest way to visualise it is via a table.
                    {"\n\n"}
                    Construct a table with 4 columns.{"\n"}
                    a and b are your integers you want to compare{"\n"}
                    q is the quotient when dividing a by b{"\n"}
                    r is the remainder when dividing a by b
                </Text>
            </View>
        )
    }
}
