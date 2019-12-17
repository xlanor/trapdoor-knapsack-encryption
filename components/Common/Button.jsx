import React, { Component } from 'react';
import { 
    TouchableOpacity,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

import { button as styles } from './styles';
class Button extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const { callback, text } = this.props;
        return (
            <TouchableOpacity onPress={callback} style={styles.buttonStyle} >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }
}
Button.propTypes = {
    callback: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button;