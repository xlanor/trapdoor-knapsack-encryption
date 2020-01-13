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
import TableImg from '../../../../../assets/images/GCDTables/NormalT3.png';

export default class page5 extends Component {
    render() {
        let style = styles.GCDPages
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>

                <View style={style.imgContainer}>
                    <Image
                        source={TableImg}
                        style={style.imgStyle}
                    />
                </View>

                <Text style={style.contentStyle}>
                    Fill in the next row:
                    {"\n\n"}
                    Let <Text style={{ ...style.bold, ...style.valA }}>
                        a
                    </Text> be the <Text style={style.bold}>
                        previous b
                    </Text>.{"\n"}
                    Let <Text style={{ ...style.bold, ...style.valB }}>
                        b
                    </Text> be the <Text style={style.bold}>
                        previous r
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
