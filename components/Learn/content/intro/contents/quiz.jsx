import React, { Component } from 'react';
import PropTypes from 'prop-types';
// react-native imports
import { Text } from 'react-native';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import stylesheet.
import styles from '../styles';

// import components
import Quiz from '../../../quiz/Quiz';

import { ALLOW_NEXT_PAGE_ACTION, NEXT_INTRO_PAGE_ACTION } from '../../../../../redux-modules/actions/tabPage';

class QuizTab extends Component {
  render() {
    const { actions } = this.props;
    return (
      <>
        <Text style={styles.PageStyle.titleStyle}>Introduction</Text>
        <Quiz
          quizType="INTRO"
          callback={() => {
            actions.ALLOW_NEXT_PAGE_ACTION();
            actions.NEXT_INTRO_PAGE_ACTION();
          }}
        />
      </>
    );
  }
}

QuizTab.propTypes = {
  actions: PropTypes.shape({
    ALLOW_NEXT_PAGE_ACTION: PropTypes.func.isRequired,
    NEXT_INTRO_PAGE_ACTION: PropTypes.func.isRequired,
  }),
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ALLOW_NEXT_PAGE_ACTION,
      NEXT_INTRO_PAGE_ACTION,
    },
    dispatch,
  ),
});

export default connect(null,mapDispatchToProps)(QuizTab);
