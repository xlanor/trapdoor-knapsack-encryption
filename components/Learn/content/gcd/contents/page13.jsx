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
import TableImg from './pic/ET6.png';

export default class page13 extends Component {
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
                    Now, look at the <Text style={style.bold}>
                        last value
                    </Text> of <Text style={style.bold}>
                        b2
                    </Text> which is -49.
                    {"\n\n"}
                    If value is <Text style={style.bold}>positive</Text>,
                    there are no further steps and it is the <Text style={style.bold}>
                        multiplicative inverse
                    </Text>.
                    {"\n\n"}
                    If the value is <Text style={style.bold}>negative</Text>,
                    such as in this case, an extra step is required:{"\n"}
                    <Text style={style.bold}>Inverse</Text> = 282 - 49
                    = <Text style={style.highlight}>233</Text>
                    {"\n\n"}
                    Hence, <Text style={style.bold}>multiplicative inverse</Text> of
                    23 mod 282 = <Text style={style.highlight}>233 mod 282</Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
