import { Dimensions } from 'react-native';
import { COLORS } from '../../../../../redux-modules/constants/Colors';

const titleStyle = {
  fontFamily: 'comfortaa-bold',
  fontSize: 25,
  marginTop: Dimensions.get('screen').height * 0.02,
  marginBottom: Dimensions.get('screen').height * 0.02,
  textAlign: 'center',
  textDecorationLine: 'underline',
};
const contentHead = {
  fontFamily: 'comfortaa-bold',
  fontSize: 20,
  textAlign: 'center',
};
const contentStyle = {
  fontFamily: 'comfortaa',
  fontSize: 18,
};
const contentStyleSmall = {
  fontFamily: 'comfortaa',
  fontSize: 14,
};
const contentStyleBig = {
  fontFamily: 'comfortaa',
  fontSize: 23,
};

const boldFont = {
  fontFamily: 'comfortaa-bold',
};

const learnTabPad = {
  // height: Dimensions.get('window').height * 0.79,
  marginLeft: Dimensions.get('window').height * 0.05,
  marginRight: Dimensions.get('window').height * 0.05,
  // backgroundColor: '#888'
};

const buttonRow = {
  alignItems: 'center',
  marginTop: Dimensions.get('window').height * 0.02,
  marginBottom: Dimensions.get('window').height * 0.02,
};

const multipleButtonLeft = {
  flex: 1,
  marginRight: Dimensions.get('window').width * 0.01,
};
const multipleButtonRight = {
  flex: 1,
  marginLeft: Dimensions.get('window').width * 0.01,
};

const linkStyle = {
  color: COLORS.LINKS_BLUE,
  textDecorationLine: 'underline',
};
const privateKey = {
  fontFamily: 'comfortaa-bold',
  color: COLORS.PRIVATEKEY_COLOR,
};
const modulusStyle = {
  color: COLORS.MODULUS_COLOR,
};
const multiplierStyle = {
  color: COLORS.MULTIPLIER_COLOR,
};
const inverseStyle = {
  color: COLORS.MULTIPLIER_INVERSE_COLOR,
};

const imageView = {
  alignItems: 'center',
  marginTop: Dimensions.get('window').height * 0.015,
};

const popUpTextStyle = {
  fontFamily: 'comfortaa',
  fontSize: 14,
  color: COLORS.POPUP_TEXT_COLOR,
};
const popUpTextStyleBold = {
  fontFamily: 'comfortaa-bold',
  fontSize: 18,
  color: COLORS.POPUP_TEXT_COLOR,
};

const tableMargin = {
  marginTop: Dimensions.get('window').height * 0.015,
  marginBottom: Dimensions.get('window').height * 0.015,
};

const imgStyle = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'contain',
};

export default {
  titleStyle,
  contentHead,
  contentStyle,
  contentStyleSmall,
  contentStyleBig,
  boldFont,
  learnTabPad,
  buttonRow,
  multipleButtonLeft,
  multipleButtonRight,
  linkStyle,
  privateKey,
  modulusStyle,
  multiplierStyle,
  inverseStyle,
  imgStyle,
  imageView,
  popUpTextStyle,
  popUpTextStyleBold,
  tableMargin,
};
