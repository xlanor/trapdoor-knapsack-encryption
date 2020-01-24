import React, { Component } from 'react';
import {
    View,
    Dimensions,
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
        let u = Dimensions.get('window').height

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
                    To find out the <Text style={{ ...style.inverseStyle, ...style.bold }}>
                        modular inverse
                    </Text>:
                </Text>
                <Text style={{ ...style.contentStyle, marginLeft: u * 0.03 }}>
                    1.{" "}
                    <Text style={{ ...style.bold, ...style.GCDStyle }}>
                        GCD(<Text style={style.valA}>a</Text>, <Text style={style.valB}>b</Text>)
                    </Text>
                    {" "}must be <Text style={style.bold}>1</Text>{"\n"}
                    2.{" "}
                    <Text style={{ ...style.inverseStyle, ...style.bold }}>Inverse</Text>
                    {" "}of{" "}
                    <Text style={{ ...style.bold, ...style.valB }}>b</Text> is{" "}
                    <Text style={style.bold}>last value</Text> of{" "}
                    <Text style={style.bold}>b2</Text>
                </Text>
                <Text style={{ ...style.contentStyle, marginTop: u * 0.02 }}>
                    If the <Text style={{ ...style.bold, ...style.GCDStyle }}>gcd</Text> is not 1,
                    there is no{" "}
                    <Text style={{ ...style.inverseStyle, ...style.bold }}>modular inverse</Text>.
                    {"\n\n"}
                    If you did the table differently, the{" "}
                    <Text style={{ ...style.inverseStyle, ...style.bold }}>inverse</Text> for{" "}
                    <Text style={{ ...style.bold, ...style.valA }}>a</Text> is the{" "}
                    <Text style={style.bold}>last value</Text> of{" "}
                    <Text style={style.bold}>a2</Text>.
                    {"\n"}
                </Text>
            </View >
        )
    }
}
