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
                    Now, we want to find the <Text style={style.bold}>
                        GCD
                    </Text> of <Text style={style.highlight}>
                        23
                    </Text> and <Text style={style.highlight}>
                        282
                    </Text>.
                    {"\n\n"}
                    <Text style={style.bold}>
                        Always set <Text style={style.valA}>
                        a
                        </Text> as the larger number and <Text style={style.valB}>
                        b
                        </Text> as the smaller number. 
                    </Text>
                    {"\n\n"}
                    Now, let <Text style={style.valA}>
                        a
                    </Text> be <Text style={style.highlight}>
                        282
                    </Text> and <Text style={style.valB}>
                        b
                    </Text> by <Text style={style.highlight}>
                        23
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
