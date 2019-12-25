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
<<<<<<< HEAD
=======
import PropTypes from 'prop-types'
>>>>>>> 2c6a6bb... test gcd content image type

import styles from './styles'

class PicStyle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, img } = this.props;
        return (
            <View style={styles.PicStyle.containerStyle} >
<<<<<<< HEAD
                <Text style={styles.PicStyle.titleStyle}>{title}</Text>
=======
                <HTML html={title} style={styles.PicStyle.titleStyle} />
>>>>>>> 2c6a6bb... test gcd content image type
                <Image source={img} style={styles.PicStyle.picStyle} />
            </View>
        )
    }
}

export default PicStyle;