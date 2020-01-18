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
import TableImg from '../../../../../assets/images/GCDTables/ET3.png';

export default class page8 extends Component {
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
                    For simplicity, reuse the <Text style={style.bold}>
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
                    <Text style={style.bold}>Step 1:</Text>
                    {"\n\n"}
                    For the first row:
                </Text>
                <Text style={{
                    ...style.contentStyle,
                    marginLeft: u * 0.03,
                    fontSize: 16
                }}>
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
