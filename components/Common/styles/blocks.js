import { Dimensions } from 'react-native';

const containerStyle = {
  flex: 1,
  padding: 16,
  paddingTop: 30,
};

const headStyle = {
  height: 40,
  backgroundColor: '#f1f8ff',
};

const wrapperStyle = {
  flexDirection: 'row',
};

const titleStyle = {
  backgroundColor: '#f6f8fa',
};

const rowStyle = {
  height: 28,
};

const headerTextStyle = {
  textAlign: 'center',
  fontFamily: 'comfortaa-bold',
  paddingLeft: Dimensions.get('window').width * 0.03,
  paddingRight: Dimensions.get('window').width * 0.03,
};
const textStyle = {
  textAlign: 'center',
  fontFamily: 'comfortaa',
};
const blockTitleView = {
  marginBottom: Dimensions.get('window').height * 0.01,
};

const blockTotalView = {
  marginTop: Dimensions.get('window').height * 0.01,
};

export default {
  containerStyle,
  headStyle,
  wrapperStyle,
  titleStyle,
  rowStyle,
  headerTextStyle,
  textStyle,
  blockTitleView,
  blockTotalView,
};
