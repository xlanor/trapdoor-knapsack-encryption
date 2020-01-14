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

//Images
import TableImg from '../../../../../assets/images/GCDTables/NormalT0.png';

export default class page2 extends Component {
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
                    With the  <Text style={style.bold}>
                        Euclidean algorithm
                    </Text>, the easiest way to visualise it is via a table.
                    {"\n\n"}
                    Construct a table with <Text style={style.highlight}>
                        4 columns
                    </Text>.{"\n"}
                    <Text style={{ ...style.bold, ...style.valA }}>
                        a
                    </Text> and <Text style={{ ...style.bold, ...style.valB }}>
                        b
                    </Text> are your integers you want to compare.{"\n"}
                    <Text style={style.bold}>
                        q
                    </Text> is the <Text style={style.bold}>
                        quotient
                    </Text> when dividing <Text style={{ ...style.bold, ...style.valA }}>
                        a
                    </Text> by <Text style={{ ...style.bold, ...style.valB }}>b</Text>.{"\n"}
                    <Text style={style.bold}>
                        r
                    </Text> is the <Text style={style.bold}>
                        remainder
                    </Text> when dividing <Text style={{ ...style.bold, ...style.valA }}>
                        a
                    </Text> by <Text style={{ ...style.bold, ...style.valB }}>b</Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
