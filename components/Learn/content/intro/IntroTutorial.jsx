import React, { Component } from 'react';
import PropTypes from 'prop-types';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ScrollView } from 'react-native-gesture-handler';

// actions
import { DISABLE_NEXT_PAGE_ACTION } from '../../../../redux-modules/actions/tabPage';
// contents
import styles from './styles';
import contents from './contents';

// dynamic pages not static pages.
class IntroPage extends Component {
  getQuiz = () => {
    const { actions, allowNextPage } = this.props;
    if (allowNextPage) {
      actions.DISABLE_NEXT_PAGE_ACTION();
    }
    return contents.QuizTab;
  };

  getPageElements = () => {
    const { currentTabPage } = this.props;

    switch (currentTabPage) {
      case 1:
        return contents.page1;
      case 2:
        return contents.page2;
      case 3:
        return contents.page3;
      case 4:
        return contents.page4;
      case 5:
        return contents.page5;
      case 6:
        return contents.page6;
      case 7:
        return this.getQuiz();
      case 8:
        return contents.UnlockNext;
      default:
        return contents.page1;
    }
  };

  render() {
    const Page = this.getPageElements();
    return (
      <>
        <ScrollView
          style={styles.ScrollStyle.scrollStyle}
          ref={ref => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() => {
            this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
          }}
        >
          <Page />
        </ScrollView>
      </>
    );
  }
}

IntroPage.propTypes = {
  currentTabPage: PropTypes.number.isRequired,
  allowNextPage: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    DISABLE_NEXT_PAGE_ACTION: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  currentTabPage: state.lessonPageTabAndPages.tabPage,
  allowNextPage: state.lessonPageTabAndPages.allowNextPage,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      DISABLE_NEXT_PAGE_ACTION,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);
