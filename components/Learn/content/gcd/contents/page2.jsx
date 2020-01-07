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
import { Dimensions } from 'react-native';
// import stylesheet.
import styles from '../styles';

export default class page2 extends Component {
    render() {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                <Image
                    source={require('./pic/NormalT1.png')}
                    style={{ width: u * 0.414 * m, height: u * 0.165 * m, alignSelf: 'center' }}
                />
                <Text style={style.contentStyle}>
                    With the Euclidean algorithm, the easiest way to visualise it is via a table.{"\n"}
                    First construct a table with 4 columns.{"\n"}
                    a and b are your integers you want to comapre{"\n"}
                    q is the quotient when dividing a by b{"\n"}
                    r is the remainder when dividing a by b
                </Text>
            </View>
        )
    }
}
