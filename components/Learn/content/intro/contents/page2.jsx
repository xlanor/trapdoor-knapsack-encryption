import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { Dimensions } from 'react-native';

// import stylesheet.
import styles from '../styles';

export default class page2 extends Component {
    render() {
        let style = styles.PageStyle
        let u = Dimensions.get('window').height
        return (
            <View style={style.containerStyle}>
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>One-way trapdoor function</Text>
                <Text style={style.contentStyle}>
                    A trapdoor function is a function that is <Text style={style.keyword}>easy to solve one way but not the other.</Text>
                    {"\n"}
                </Text>
                <Image 
                    source={require('./1052px-Trapdoor_permutation.svg.png')}  
                    style={{width: u * 0.1052*3, height: u * 0.0744*3, alignSelf:'center' }}
                />
                
                <Text style={style.contentStyle}>
                    A good example of the trapdoor function is the Discrete Logarithm problem.
                    {"\n"}
                    Assuming we have a function:{"\n"}
                    a^k=b{"\n"}
                    Given <Text style={style.keyword}>b</Text>, we would be unable to find <Text style={style.keyword}>a</Text> and <Text style={style.keyword}>k</Text> in a reasonable time.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
