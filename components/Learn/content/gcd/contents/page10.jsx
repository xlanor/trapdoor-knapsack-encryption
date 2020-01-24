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
import TableImg from '../../../../../assets/images/GCDTables/ET5.png';

export default class page10 extends Component {
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

                <Text style={{ ...style.contentStyle }}>
                    <Text style={style.bold}>Step 3:</Text>
                    {"\n\n"}
                    Calculate <Text style={style.bold}>a2</Text> and{" "}
                    <Text style={style.bold}>b2</Text> using the{" "}
                    <Text style={style.bold}>formulas</Text> below:
                </Text>
                <Text style={{
                    ...style.contentStyle,
                    ...style.bold,
                    marginLeft: u * 0.03,
                    fontSize: 16
                }}>
                    a1 = a2{"\n"}
                    <Text style={{ backgroundColor: '#FFFF00' }}>a2 = a1 - q * a2</Text>{"\n"}
                    b1 = b2{"\n"}
                    <Text style={{ backgroundColor: '#FFFF00' }}>b2 = b1 - q * b2</Text>
                </Text>
                <Text style={{ ...style.contentStyle, marginTop: u * 0.02, ...style.bold }}>
                    Note:{"\n"}
                    All the values that are shifted to the left.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
