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
import TableImg from '../../../../../assets/images/GCDTables/ET6.png';

export default class page12 extends Component {
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
                    To find out the multiplicative inverse.{"\n"}
                    1. <Text style={style.bold}>
                        GCD(<Text style={style.valA}>a</Text>, <Text style={style.valB}>b</Text>)
                    </Text> must be <Text style={style.bold}>1</Text>{"\n"}
                    2. Inverse of <Text style={style.valB}>b</Text> is <Text style={style.bold}>
                        last value
                    </Text> of <Text style={style.bold}>b2</Text>
                    {"\n\n"}
                    If the gcd is not 1, there is no <Text style={style.bold}>
                        multiplicative inverse
                    </Text>.
                    {"\n\n"}
                    If you did the table differently, the inverse for <Text style={style.valA}>a</Text> is
                    the <Text style={style.bold}>last value</Text> of <Text style={style.bold}>a2</Text>.
                </Text>
            </View>
        )
    }
}
