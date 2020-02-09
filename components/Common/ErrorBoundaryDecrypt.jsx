import React, { Component } from 'react';

import PropTypes from 'prop-types';

import PopUpWithButtons from './PopUpWithButtons';

class ErrorBoundaryDecrypt extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? (
      <PopUpWithButtons
        ButtonOne={this.setState(prevState => ({
          hasError: !prevState.hasError,
        }))}
        visibility={hasError}
        messageContent="An error occure!"
      />
    ) : (
      children
    );
  }
}

ErrorBoundaryDecrypt.propTypes = {
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

export default ErrorBoundaryDecrypt;
