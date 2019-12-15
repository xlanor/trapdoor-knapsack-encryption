import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Spinner = props => {
  const { size, color } = props;
  return <ActivityIndicator size={size} color={color} />;
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'small',
  color: '#ffffff',
};

export { Spinner };