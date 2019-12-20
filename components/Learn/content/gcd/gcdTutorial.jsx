import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {
  Table,
  TableWrapper,
  Rows,
  Row,
  Col
}
  from 'react-native-table-component';

import HTML from 'react-native-render-html';
import PropTypes from 'prop-types';

// import stylesheet.
import styles from './styles';

//contents
import contents from './contents';

// dynamic pages not static pages.
class GCDPage extends Component {
  constructor(props) {
    super(props);
    let pageNo = this.pageNo;
  }
  getPage15 = () => {
    return (
      <View>
        <HTML html={contents.pageFifteen.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageFifteen.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageFifteen.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageFifteen.text} />
      </View>
    )
  }
  getPage14 = () => {
    return (
      <View>
        <HTML html={contents.pageFourteen.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageFourteen.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageFourteen.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageFourteen.text} />
      </View>
    )
  }
  getPage13 = () => {
    return (
      <View>
        <HTML html={contents.pageThirteen.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageThirteen.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageThirteen.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageThirteen.text} />
      </View>
    )
  }
  getPage12 = () => {
    return (
      <View>
        <HTML html={contents.pageTwelve.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageTwelve.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageTwelve.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageTwelve.text} />
      </View>
    )
  }
  getPage11 = () => {
    return (
      <View>
        <HTML html={contents.pageEleven.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageEleven.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageEleven.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageEleven.text} />
      </View>
    )
  }
  getPage10 = () => {
    return (
      <View>
        <HTML html={contents.pageTen.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageTen.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageTen.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageTen.text} />
      </View>
    )
  }
  getPage9 = () => {
    return (
      <View>
        <HTML html={contents.pageNine.title} />
        <HTML html={contents.pageNine.text} />
      </View>
    )
  }
  getPage8 = () => {
    return (
      <View>
        <HTML html={contents.pageEight.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageEight.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageEight.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageEight.text} />
      </View>
    )
  }
  getPage7 = () => {
    return (
      <View>
        <HTML html={contents.pageSeven.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageSeven.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageSeven.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageSeven.text} />
      </View>
    )
  }
  getPage6 = () => {
    return (
      <View>
        <HTML html={contents.pageSix.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageSix.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageSix.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageSix.text} />
      </View>
    )
  }
  getPage5 = () => {
    return (
      <View>
        <HTML html={contents.pageFive.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageFive.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageFive.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageFive.text} />
      </View>
    )
  }
  getPage4 = () => {
    return (
      <View>
        <HTML html={contents.pageFour.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageFour.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageFour.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageFour.text} />
      </View>
    )
  }
  getPage3 = () => {
    return (
      <View>
        <HTML html={contents.pageThree.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageThree.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageThree.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageThree.text} />
      </View>
    )
  }
  getPage2 = () => {
    return (
      <View>
        <HTML html={contents.pageTwo.title} />
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={contents.pageTwo.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={contents.pageTwo.tableData} textStyle={styles.text} />
        </Table>

        <HTML html={contents.pageTwo.text} />
      </View>
    )
  }
  getPage1 = () => {
    return (
      <View>
        <HTML html={contents.pageOne.title} />
        <HTML html={contents.pageOne.text} />
      </View>
    )
  }
  getPageElements = () => {
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
    return this.getPage15();
  }
}

export default GCDPage;