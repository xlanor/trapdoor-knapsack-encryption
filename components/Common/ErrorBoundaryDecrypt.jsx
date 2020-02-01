import React, { Component } from 'react';

import PopUpWithButtons from './PopUpWithButtons'

class ErrorBoundaryDecrypt extends React.Component {
    state = { hasError: false }
  
    static getDerivedStateFromError (error) {
      return { hasError: true }
    }
  
    componentDidCatch (error, info) {
      logErrorToService(error, info.componentStack)
    }
  
    render () {
      return this.state.hasError
        ? <PopUpWithButtons
        ButtonOne={this.setState(
                (prevState)=>({
                    showErrorPopUp: !prevState.showErrorPopUp
                }))
            }
        visibility={showErrorPopUp}
        messageContent={'An error occure!'}
    />
        : this.props.children
    }
  }

export default ErrorBoundaryDecrypt;