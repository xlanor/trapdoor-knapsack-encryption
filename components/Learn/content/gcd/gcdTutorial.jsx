import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//contents
import contents from './contents';
import GCDPages from './GCDPages';
import PicStyle from './PicStyle';

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
  getpic28 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic28}
      />
    )
  }
  getpic27 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic27}
      />
    )
  }
  getpic26 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic26}
      />
    )
  }
  getpic25 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic25}
      />
    )
  }
  getpic24 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic24}
      />
    )
  }
  getpic23 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic23}
      />
    )
  }
  getpic22 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic22}
      />
    )
  }
  getpic21 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic21}
      />
    )
  }
  getpic20 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic20}
      />
    )
  }
  getpic19 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic19}
      />
    )
  }
  getpic18 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic18}
      />
    )
  }
  getpic17 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic17}
      />
    )
  }
  getpic16 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic16}
      />
    )
  }
  getpic15 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic15}
      />
    )
  }
  getpic14 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic14}
      />
    )
  }
  getpic13 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic13}
      />
    )
  }
  getpic12 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic12}
      />
    )
  }
  getpic11 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic11}
      />
    )
  }
  getpic10 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic10}
      />
    )
  }
  getpic9 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic9}
      />
    )
  }
  getpic8 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic8}
      />
    )
  }
  getpic7 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic7}
      />
    )
  }
  getpic6 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic6}
      />
    )
  }
  getpic5 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic5}
      />
    )
  }
  getpic4 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic4}
      />
    )
  }
  getpic3 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic3}
      />
    )
  }
  getpic2 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic2}
      />
    )
  }
  getpic1 = () => {
    return (
      <PicStyle
        title={"<h1>Euclidean Algorithm</h1>"}
        img={contents.pic1}
      />
    )
  }
  checkPageNo = () => {
    const { lockState } = this.props;

    return lockState.lessonPageTabAndPages.tabPage;
  }
  getPageElements = () => {
    //pic displays picture content instead
    //Remember to replace redux values
    const DISPLAY = "pic";

    let pageNo = this.checkPageNo()
    if (DISPLAY == "pic") {
      switch (pageNo) {
        case 1: return this.getpic1();
        case 2: return this.getpic2();
        case 3: return this.getpic3();
        case 4: return this.getpic4();
        case 5: return this.getpic5();
        case 6: return this.getpic6();
        case 7: return this.getpic7();
        case 8: return this.getpic8();
        case 9: return this.getpic9();
        case 10: return this.getpic10();
        case 11: return this.getpic11();
        case 12: return this.getpic12();
        case 13: return this.getpic13();
        case 14: return this.getpic14();
        case 15: return this.getpic15();
        case 16: return this.getpic16();
        case 17: return this.getpic17();
        case 18: return this.getpic18();
        case 19: return this.getpic19();
        case 20: return this.getpic20();
        case 21: return this.getpic21();
        case 22: return this.getpic22();
        case 23: return this.getpic23();
        case 24: return this.getpic24();
        case 25: return this.getpic25();
        case 26: return this.getpic26();
        case 27: return this.getpic27();
        case 28: return this.getpic28();
        default: return this.getpic1();
      }
    } else {
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