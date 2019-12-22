import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ALLOW_NEXT_PAGE_ACTION
} from '../../../../actions/tabPage';

//contents
import contents from './contents';
import GCDPages from './GCDPages';

// dynamic pages not static pages.
class GCDPage extends Component {
  constructor(props) {
    super(props);
  }
  getPage15 = () => {
    let page = contents.pageFifteen;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage14 = () => {
    let page = contents.pageFourteen;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage13 = () => {
    let page = contents.pageThirteen;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage12 = () => {
    let page = contents.pageTwelve;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage11 = () => {
    let page = contents.pageEleven;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage10 = () => {
    let page = contents.pageTen;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage9 = () => {
    let page = contents.pageNine;
    return (
      <GCDPages
        title={page.title}
        text={page.text}
      />
    )
  }
  getPage8 = () => {
    let page = contents.pageEight;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage7 = () => {
    let page = contents.pageSeven;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage6 = () => {
    let page = contents.pageSix;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage5 = () => {
    let page = contents.pageFive;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage4 = () => {
    let page = contents.pageFour;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage3 = () => {
    let page = contents.pageThree;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage2 = () => {
    let page = contents.pageTwo;
    return (
      <GCDPages
        title={page.title}
        tableHead={page.tableHead}
        tableData={page.tableData}
        text={page.text}
      />
    )
  }
  getPage1 = () => {
    let page = contents.pageOne;
    return (
      <GCDPages
        title={page.title}
        text={page.text}
      />
    )
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
      case 14: return this.getPage14();
      case 15: return this.getPage15();
      default: return this.getPage1();
    }
  }
  render() {
    return this.getPageElements()
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