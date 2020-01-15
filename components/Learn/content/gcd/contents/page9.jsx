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
import TableImg from '../../../../../assets/images/GCDTables/ET4.png';

export default class page9 extends Component {
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
                    <Text style={style.bold}>Step 2:</Text>{"\n"}
                    Next, fill the next row like Euclidean algorithm:
                </Text>
                <Text style={{
                    ...style.contentStyle,
                    ...style.bold,
                    marginLeft: u * 0.03,
                    fontSize: 16
                }}>
                    Let <Text style={style.valA}>
                        a
                    </Text> be the previous b.{"\n"}
                    Let <Text style={style.valB}>
                        b
                    </Text> be the previous r.
                </Text>
                <Text style={{ ...style.contentStyle, marginTop: u * 0.02 }}>
                    Use the following <Text style={style.bold}>
                        formulas
                    </Text> for the rest of the columns:
                </Text>
                <Text style={{
                    ...style.contentStyle,
                    ...style.bold,
                    marginLeft: u * 0.03,
                    fontSize: 16
                }}>
                    <Text style={{ backgroundColor: '#00FF00' }}>a1 = a2</Text>{"\n"}
                    a2 = a1 - q * a2{"\n"}
                    <Text style={{ backgroundColor: '#00FF00' }}>b1 = b2</Text>{"\n"}
                    b2 = b1 - q * b2
                </Text>
                <Text style={{ ...style.contentStyle, marginTop: u * 0.02 }}>
                    Let <Text style={style.bold}>
                        a1
                    </Text> be the <Text style={style.bold}>
                        previous a2
                    </Text> and <Text style={style.bold}>
                        b1
                    </Text> be the <Text style={style.bold}>
                        previous b2
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
