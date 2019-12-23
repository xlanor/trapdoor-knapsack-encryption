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
    getStyle = () => {
        const { buttonColor } = this.props;
        switch(buttonColor){
            case "green":
                return styles.buttonStyle;
            case "blue":
                return styles.buttonStyleBlue;
            default:
                return styles.buttonStyle;
        }
    }
    render(){
        const { callback, text, buttonColor } = this.props;
        return (
            buttonColor
            ?
            <TouchableOpacity onPress={callback} style={this.getStyle()} >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={callback} style={styles.buttonStyle} >
                <Text style={styles.textStyle}>{text}</Text>
            </TouchableOpacity>
        );
    }
}
Button.propTypes = {
    callback: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    buttonColor: PropTypes.string,
}

export default Button;