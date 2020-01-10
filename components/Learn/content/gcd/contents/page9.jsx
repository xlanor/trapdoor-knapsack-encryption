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

export default class page9 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                
                <View style={style.imgContainer}>
                    <Image
                        source={require('./pic/ET4.png')}
                        style={style.imgStyle}
                    />
                </View>
                
                <Text style={style.contentStyle}>
                    Next, fill the next row like Euclidean algorithm:{"\n"}
                    <Text style={style.bold}>
                        Let <Text style={style.valA}>
                            a
                        </Text> be previous b.{"\n"}
                        Let <Text style={style.valB}>
                            b
                        </Text> be previous r.
                    </Text>
                    {"\n\n"}
                    Use the following <Text style={style.bold}>
                        formulas
                    </Text> for the rest of the columns:{"\n"}
                    <Text style={style.highlight}>a1 = a2</Text>{"\n"}
                    a2 = a1 - q * a2{"\n"}
                    <Text style={style.highlight}>b1 = b2</Text>{"\n"}
                    b2 = b1 - q * b2
                    {"\n\n"}
                    Let a1 be <Text style={style.bold}>
                        previous a2
                    </Text> and b1 be <Text style={style.bold}>
                        previous b2
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
