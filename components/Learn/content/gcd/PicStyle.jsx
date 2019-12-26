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

import HTML from 'react-native-render-html'

import styles from './styles'

class PicStyle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, img } = this.props;
        return (
            <KeyboardAvoidingView animated={true}>
                <View style={styles.PicStyle.containerStyle} >
                    <Text style={styles.PicStyle.titleStyle}>{title}</Text>
                    <Image source={img} style={styles.PicStyle.picStyle} />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default PicStyle;