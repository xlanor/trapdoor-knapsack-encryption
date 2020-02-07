import React, { Component } from 'react';

import PopUpWithButtons from './PopUpWithButtons'

class ErrorBoundaryDecrypt extends React.Component {
    state = { hasError: false }
  
    static getDerivedStateFromError (error) {
      return { hasError: true }
    }
  
    componentDidCatch (error, info) {
      console.log(error, info.componentStack)
    }
  
    render () {
      const { hasError } = this.state;
      return this.state.hasError
        ? <PopUpWithButtons
        ButtonOne={this.setState(
                (prevState)=>({
                  hasError: !prevState.hasError
                }))
            }
        visibility={hasError}
        messageContent={'An error occure!'}
    />
        : this.props.children
    }
  }

export default ErrorBoundaryDecrypt;