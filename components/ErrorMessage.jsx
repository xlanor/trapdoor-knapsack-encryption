import React, { Component } from 'React';
import { Text } from 'react-native';

const style = {
    color: 'red'
}

export default class ErrorMessage extends Component{
    constructor(props){
      super(props);
      this.state = {
        errorMessage: '',
        showMessage: false,
      }
    }
    componentWillReceiveProps(nextProps){
      this.setState({ 
        errorMessage: nextProps.errorMessage,
        showMessage: nextProps.showError
      });
    }
    render(){
      const { errorMessage } =  this.state 
      return(
        <Text style={style}>{errorMessage}</Text>
      );
    }
}