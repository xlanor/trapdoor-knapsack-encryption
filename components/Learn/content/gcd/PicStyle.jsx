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

import styles from './styles'

class PicStyle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, img } = this.props;
        return (
            <View style={styles.PicStyle.containerStyle} >
                <View style={styles.PicStyle.titleStyle}>
                    <HTML html={title}/>
                </View>
                <Image source={img} style={styles.PicStyle.picStyle} />
            </View>
        )
    }
}

export default PicStyle;