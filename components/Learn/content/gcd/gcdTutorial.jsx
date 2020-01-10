import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native-gesture-handler';

// import stylesheet.
import styles from './styles';
//contents
import contents from './contents';

// dynamic pages not static pages.
class GCDPage extends Component {
  constructor(props) {
    super(props);
  }
  getPage1 = () => {
    let Page = contents.page1;
    return <Page />
  }
  getPage2 = () => {
    let Page = contents.page2;
    return <Page />
  }
  getPage3 = () => {
    let Page = contents.page3;
    return <Page />
  }
  getPage4 = () => {
    let Page = contents.page4;
    return <Page />
  }
  getPage5 = () => {
    let Page = contents.page5;
    return <Page />
  }
  getPage6 = () => {
    let Page = contents.page6;
    return <Page />
  }
  getPage7 = () => {
    let Page = contents.page7;
    return <Page />
  }
  getPage8 = () => {
    let Page = contents.page8;
    return <Page />
  }
  getPage9 = () => {
    let Page = contents.page9;
    return <Page />
  }
  getPage10 = () => {
    let Page = contents.page10;
    return <Page />
  }
  getPage11 = () => {
    let Page = contents.page11;
    return <Page />
  }
  getPage12 = () => {
    let Page = contents.page12;
    return <Page />
  }
  getPage13 = () => {
    let Page = contents.page13;
    return <Page />
  }
  
  checkPageNo = () => {
    const { lockState } = this.props;

    return lockState.lessonPageTabAndPages.tabPage;
  }
  getPageElements = () => {
    let pageNo = this.checkPageNo()
    switch (pageNo) {
      case 1: return this.getPage1();
      case 2: return this.getPage2();
      case 3: return this.getPage3();
      case 4: return this.getPage4();
      case 5: return this.getPage5();
      case 6: return this.getPage6();
      case 7: return this.getPage7();
      case 8: return this.getPage8();
      case 9: return this.getPage9();
      case 10: return this.getPage10();
      case 11: return this.getPage11();
      case 12: return this.getPage12();
      case 13: return this.getPage13();
      default: return this.getPage1();
    }
  }
  render() {
    return (
      <ScrollView style={styles.ScrollStyle.scrollStyle}>
        {this.getPageElements()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  lockState: state
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GCDPage);