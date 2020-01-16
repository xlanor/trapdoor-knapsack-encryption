import { AppState } from 'react-native';

import React, { Component } from 'react';

import { getQuestions } from '../../api/Questions';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CALL_API } from '../../redux-modules/actions/updateQuestions';

class UpdateQuestions extends Component{
    constructor(props){
        super(props);
        this.state = {
            appState: AppState.currentState,
        }
    }
    componentDidMount() {
      AppState.addEventListener('change', this.handleAppStateChange);
      const { actions } = this.props;
      actions.CALL_API('INTRO')
      actions.CALL_API('ALGO')
      actions.CALL_API('KEYGEN')
      actions.CALL_API('ENCRYPT')
      actions.CALL_API('DECRYPT')
      console.log(`APP LOADED`)
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    
    handleAppStateChange = nextAppState => {
        const { appState } = this.state;
        const { actions } = this.props;
        console.log(`App state changed: ${appState}, ${nextAppState}`)

        if (appState !== 'background' && nextAppState === 'background') {
            console.log(`Triggering API Call`)
            actions.CALL_API('INTRO')
        }
        this.setState({ appState: nextAppState });
    }
    render(){
        return null;
    }
}


const mapStateToProps = state => ({
    lockState: state
  })
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        CALL_API
    }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(UpdateQuestions);