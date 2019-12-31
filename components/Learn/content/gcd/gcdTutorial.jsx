import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native-gesture-handler';

// import stylesheet.
import styles from './styles';
//contents
import contents from './contents';
import PicStyle from './PicStyle';

// dynamic pages not static pages.
class GCDPage extends Component {
  constructor(props) {
    super(props);
  }
  // Picture content version
  getpic28 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic28}
      />
    )
  }
  getpic27 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic27}
      />
    )
  }
  getpic26 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic26}
      />
    )
  }
  getpic25 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic25}
      />
    )
  }
  getpic24 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic24}
      />
    )
  }
  getpic23 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic23}
      />
    )
  }
  getpic22 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic22}
      />
    )
  }
  getpic21 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic21}
      />
    )
  }
  getpic20 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic20}
      />
    )
  }
  getpic19 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic19}
      />
    )
  }
  getpic18 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic18}
      />
    )
  }
  getpic17 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic17}
      />
    )
  }
  getpic16 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic16}
      />
    )
  }
  getpic15 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic15}
      />
    )
  }
  getpic14 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic14}
      />
    )
  }
  getpic13 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic13}
      />
    )
  }
  getpic12 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic12}
      />
    )
  }
  getpic11 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic11}
      />
    )
  }
  getpic10 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic10}
      />
    )
  }
  getpic9 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic9}
      />
    )
  }
  getpic8 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic8}
      />
    )
  }
  getpic7 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic7}
      />
    )
  }
  getpic6 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic6}
      />
    )
  }
  getpic5 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic5}
      />
    )
  }
  getpic4 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic4}
      />
    )
  }
  getpic3 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic3}
      />
    )
  }
  getpic2 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic2}
      />
    )
  }
  getpic1 = () => {
    return (
      <PicStyle
        title={"Extended Euclidean Algorithm"}
        img={contents.pic1}
      />
    )
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
      case 4: return this.getpic1();
      case 5: return this.getpic2();
      case 6: return this.getpic3();
      case 7: return this.getpic4();
      case 8: return this.getpic5();
      case 9: return this.getpic6();
      case 10: return this.getpic7();
      case 11: return this.getpic8();
      case 12: return this.getpic9();
      case 13: return this.getpic10();
      case 14: return this.getpic11();
      case 15: return this.getpic12();
      case 16: return this.getpic13();
      case 17: return this.getpic14();
      case 18: return this.getpic15();
      case 19: return this.getpic16();
      case 20: return this.getpic17();
      case 21: return this.getpic18();
      case 22: return this.getpic19();
      case 23: return this.getpic20();
      case 24: return this.getpic21();
      case 25: return this.getpic22();
      case 26: return this.getpic23();
      case 27: return this.getpic24();
      case 28: return this.getpic25();
      case 29: return this.getpic26();
      case 30: return this.getpic27();
      case 31: return this.getpic28();
      default: return this.getpic1();
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