import React, { Component } from 'react';

import { TextInput } from 'react-native';

const styles = {
    textInput: {
      borderWidth: 2,  // size/width of the border
      borderColor: 'lightgrey',  // color of the border
      paddingLeft: 10,
      height: 50
    }
}

export default class ModuloAndMultiplicator extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }
  setTextState = (text) => {
    const { updateValue } = this.props;
    this.setState({text})
    updateValue(text);

  }
  render(){
    return (
      <TextInput style={styles.textInput} onChangeText={(text) => this.setTextState(text)} keyboardType={'numeric'}  ></TextInput>
    );
  }
};