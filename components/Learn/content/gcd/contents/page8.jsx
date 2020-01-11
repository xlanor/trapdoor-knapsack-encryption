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

//images
import TableImg from './pic/ET3.png';

export default class page8 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                
                <View style={style.imgContainer}>
                    <Image
                        source={TableImg}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    For simplicity we are going to reuse the <Text style={style.bold}>
                        same 2 integers <Text style={style.valA}>
                            a
                        </Text> and <Text style={style.valB}>
                            b
                        </Text>
                    </Text>, <Text style={style.highlight}>
                        282
                    </Text> and <Text style={style.highlight}>
                        23
                    </Text>.
                    {"\n\n"}
                    Now for the first row:{"\n"}
                    - Let <Text style={style.bold}>
                        a1 = 1, a2 = 0, b1 = 0, b2 = 1
                    </Text>{"\n"}
                    - Calculate the values of <Text style={style.bold}>
                        q
                    </Text> and <Text style={style.bold}>
                        r
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
