import { AppState } from 'react-native';

import React, { Component } from 'react';

class UpdateQuestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            appState: AppState.currentState,
        }
    }
    componentDidMount() {
      AppState.addEventListener('change', this.handleAppStateChange);
      console.log(`APP LOADED`)
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    
    handleAppStateChange = nextAppState => {
        const { appState } = this.state;
        console.log(`App state changed: ${appState}, ${nextAppState}`)

        if (appState !== 'background' && nextAppState === 'background') {
            console.log(`Triggering API Call`)
        }
        this.setState({ appState: nextAppState });
    }
    render(){
        return null;
    }
}

export default UpdateQuestions;