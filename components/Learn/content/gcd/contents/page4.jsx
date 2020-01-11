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
import TableImg from './pic/NormalT2.png';

export default class page4 extends Component {
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
                    Calculate the values of <Text style={style.bold}>
                        q
                    </Text> and <Text style={style.bold}>
                        r
                    </Text>:
                </Text>
                <Text style={{alignSelf:"center"}}>
                    <Text style={style.contentStyle}>
                        282 / 23 => <Text style={style.highlight}>
                            q = 12, r = 6
                    </Text>
                    </Text>
                </Text>
                    
                <Text style={style.contentStyle}>
                    {"\n"}
                    Let <Text style={style.bold}>
                        r
                    </Text> be <Text style={style.highlight}>
                        6
                    </Text> and <Text style={style.bold}>
                        q
                    </Text> be <Text style={style.highlight}>
                        12
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
