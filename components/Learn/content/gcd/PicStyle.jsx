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
import PropTypes from 'prop-types'

import styles from './styles'

class PicStyle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, img } = this.props;
        return (
            <View style={styles.PicStyle.containerStyle} >
                <HTML html={title} style={styles.PicStyle.titleStyle} />
                <Image source={img} style={styles.PicStyle.picStyle} />
            </View>
        )
    }
}

export default PicStyle;