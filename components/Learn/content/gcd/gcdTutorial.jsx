import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
// import stylesheet.
import styles from './styles';
// contents
import contents from './contents';

// actions
import { DISABLE_NEXT_PAGE_ACTION } from '../../../../redux-modules/actions/tabPage';

// dynamic pages not static pages.
class GCDPage extends Component {
  constructor(props) {
    super(props);
  }

  placeholder15 = () => {
    return <Text>15</Text>;
  };

  getQuiz = () => {
    const { actions, allowNextPage } = this.props;
    if (allowNextPage) {
      actions.DISABLE_NEXT_PAGE_ACTION();
    }
    return contents.QuizTab;
  };

  getPageElements = () => {
    const { currentPage } = this.props;
    switch (currentPage) {
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
        return contents.page7;
      case 8:
        return contents.page8;
      case 9:
        return contents.page9;
      case 10:
        return contents.page10;
      case 11:
        return contents.page11;
      case 12:
        return contents.page12;
      case 13:
        return contents.page13;
      case 14:
        return this.getQuiz();
      case 15:
        return contents.UnlockNext;
      default:
        return contents.page1;
    }
  };

  render() {
    const Page = this.getPageElements();
    return (
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
    );
  }
}

const mapStateToProps = state => ({
  currentPage: state.lessonPageTabAndPages.tabPage,
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

export default connect(mapStateToProps, mapDispatchToProps)(GCDPage);
