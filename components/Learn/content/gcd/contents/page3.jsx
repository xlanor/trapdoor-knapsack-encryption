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
import TableImg from '../../../../../assets/images/GCDTables/NormalT1.png';

export default class page3 extends Component {
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
                    For example, to find the{" "}
                    <Text style={{ ...style.bold, ...style.GCDStyle }}>GCD</Text>
                    {" "}of{" "}
                    <Text style={style.highlight}>23</Text>
                    {" "}and{" "}
                    <Text style={style.highlight}>282</Text>,
                    insert the 2 integers into the table.
                    {"\n\n"}
                    <Text style={style.bold}>
                        Note{"\n"}
                        Always set{" "}
                        <Text style={style.valA}>a</Text>
                        {" "}as the larger number and{" "}
                        <Text style={style.valB}>b</Text>
                        {" "}as the smaller number.
                    </Text>
                    {"\n\n"}
                    Let{" "}
                    <Text style={{ ...style.bold, ...style.valA }}>a</Text>
                    {" "}be{" "}
                    <Text style={style.highlight}>282</Text>
                    {" "}and{" "}
                    <Text style={{ ...style.bold, ...style.valB }}>b</Text>
                    {" "}be{" "}
                    <Text style={style.highlight}>23</Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
