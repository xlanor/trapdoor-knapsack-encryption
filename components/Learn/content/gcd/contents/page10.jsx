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
                        source={require('./pic/ET5.png')}
                        style={style.imgStyle}
                    />
                </View>

                <Text style={style.contentStyle}>
                    Use the following <Text style={style.bold}>
                        formulas
                    </Text> for the rest of the columns:{"\n"}
                    a1 = a2{"\n"}
                    <Text style={style.highlight}>a2 = a1 - q * a2</Text>{"\n"}
                    b1 = b2{"\n"}
                    <Text style={style.highlight}>b2 = b1 - q * b2</Text>
                    {"\n\n"}
                    
                    Calculate <Text style={style.bold}>
                        a2
                    </Text> and <Text style={style.bold}>
                        b2
                    </Text> using the formula above.
                    {"\n\n"}
                    <Text style={style.bold}>
                        Notice all the values shifting left?
                    </Text>
                    {"\n"}
                </Text>
            </View>
        )
    }
}
