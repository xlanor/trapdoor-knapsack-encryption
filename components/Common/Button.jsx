import React, { Component } from 'react';
import { 
    TouchableOpacity,
    Text,
} from 'react-native';
import PropTypes from 'prop-types';

import {
    Button as RneButton
} from 'react-native-elements';

    /*

            <TouchableOpacity onPress={callback} style={this.getStyle()} >
            </TouchableOpacity>
            <TouchableOpacity onPress={callback} style={ styles.buttonStyle}>
            </TouchableOpacity>
            style={styles.buttonStyle} 
             style={this.getStyle()}
    */
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
            <RneButton raised buttonStyle={this.getStyle()} onPress={callback} title={text}/>
            :
            <RneButton raised buttonStyle={this.getStyle("green")}  onPress={callback} title={text}/>
        );
    }
}
Button.propTypes = {
    callback: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    buttonColor: PropTypes.string,
}

export default Button;