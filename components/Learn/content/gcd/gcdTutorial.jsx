import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native';
// import stylesheet.
import styles from './styles';
//contents
import contents from './contents';

// dynamic pages not static pages.
class GCDPage extends Component {
  constructor(props) {
    super(props);
  }
  placeholder15 = () => {
    return (
      <Text>15</Text>
    )
  }
  placeholder14 = () => {
    return (
      <Text>14</Text>
    )
  }
  getPageElements = () => {
    
    const { currentPage } = this.props;
    switch (currentPage) {
      case 1: return contents.page1;
      case 2: return contents.page2;
      case 3: return contents.page3;
      case 4: return contents.page4;
      case 5: return contents.page5;
      case 6: return contents.page6;
      case 7: return contents.page7;
      case 8: return contents.page8;
      case 9: return contents.page9;
      case 10: return contents.page10;
      case 11: return contents.page11;
      case 12: return contents.page12;
      case 13: return contents.page13;
      case 14: return this.placeholder14;
      case 15: return this.placeholder15;
      default: return contents.page1;
    }
  }
  render() {
    let Page = this.getPageElements();
    return (
      <ScrollView style={styles.ScrollStyle.scrollStyle}>
        <Page />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  currentPage: state.lessonPageTabAndPages.tabPage,
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GCDPage);