/* eslint-disable react/no-unused-state */
import { AppState } from 'react-native';

// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

import PropTypes from 'react-proptypes';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CALL_API } from '../../redux-modules/actions/updateQuestions';

class UpdateQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    const { actions } = this.props;
    actions.CALL_API('INTRO');
    actions.CALL_API('ALGO');
    actions.CALL_API('KEYGEN');
    actions.CALL_API('ENCRYPT');
    actions.CALL_API('DECRYPT');
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState => {
    const { actions } = this.props;
    actions.CALL_API('INTRO');
    actions.CALL_API('ALGO');
    actions.CALL_API('KEYGEN');
    actions.CALL_API('ENCRYPT');
    actions.CALL_API('DECRYPT');
    this.setState({ appState: nextAppState });
  };

  render() {
    return null;
  }
}
UpdateQuestions.propTypes = {
  actions: PropTypes.shape({
    CALL_API: PropTypes.func.isRequired,
  }),
};
// eslint-disable-next-line no-unused-vars
const mapStateToProps = _state => ({});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      CALL_API,
    },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateQuestions);
