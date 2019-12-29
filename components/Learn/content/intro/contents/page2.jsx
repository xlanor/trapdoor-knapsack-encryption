import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import HTML from 'react-native-render-html'
import { ScrollView } from 'react-native-gesture-handler';

// import stylesheet.
import styles from '../styles';

export default class page2 extends Component {
    render() {
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>One-Way Trapdoor function</Text>

                <Text style={style.contentStyle}>
                    A one-way trapdoor function, in layman's terms, means that while it will be hard to compute the inverse of a function,
                    unless the trapdoor is given, in which case, it will be easy to compute.
                    {"\n\n"}
                    A good example of the trapdoor function is the
                    {"\n"}
                    <Text style={style.bold}><Text style={style.underline}>Discrete Logarithm problem</Text></Text>
                    {"\n\n"}
                    Assuming we have a function
                </Text>

                {/* formula */}
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 20 }}>a</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 15 }}>k</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 20 }}> = b</Text>
                    </View>
                </View>

                <Text style={style.contentStyle}>
                    {"\n"}
                    Given b, we would be unable to find <Text style={style.underline}>a</Text> and <Text style={style.underline}>k</Text> in a <Text style={style.bold}>reasonable time!</Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
