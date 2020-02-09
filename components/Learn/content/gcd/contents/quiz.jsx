import React, { Component } from 'react';
// react-native imports
import { Text } from 'react-native';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import third party libs
import { Card, Button as RneButton, Image as RneImage } from 'react-native-elements';

// import stylesheet.
import styles from '../styles';

// import components
import Quiz from '../../../quiz/Quiz';

import { ALLOW_NEXT_PAGE_ACTION, NEXT_GCD_PAGE_ACTION } from '../../../../../redux-modules/actions/tabPage';

class QuizTab extends Component {
  render() {
    const { actions } = this.props;
    return (
      <>
        <Text style={styles.GCDPages.titleStyle}>Euclidean and Extended Euclidean Algorithm</Text>
        <Quiz
          quizType="ALGO"
          callback={() => {
            actions.ALLOW_NEXT_PAGE_ACTION();
            actions.NEXT_GCD_PAGE_ACTION();
          }}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  lockState: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ALLOW_NEXT_PAGE_ACTION,
      NEXT_GCD_PAGE_ACTION,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizTab);
