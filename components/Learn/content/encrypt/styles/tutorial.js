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
const textBoxStyle = {
  fontFamily: 'comfortaa-bold',
  backgroundColor: COLORS.YELLOW_1,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 5,
  height: Dimensions.get('screen').height * 0.08,
  fontSize: 20,
  paddingLeft: Dimensions.get('screen').height * 0.01,
  paddingTop: Dimensions.get('screen').height * 0.01,
  paddingBottom: Dimensions.get('screen').height * 0.01,
};

const learnTabPad = {};

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
const encryptTextGray = {
  color: COLORS.GREY_1,
};
const publicKey = {
  fontFamily: 'comfortaa-bold',
  color: COLORS.PUBLICKEY_COLOR,
};
const knapsackSizeStyle = {
  fontFamily: 'comfortaa-bold',
  color: COLORS.KNAPSACK_SIZE_GREY,
};

const secondParaView = {
  marginTop: Dimensions.get('window').height * 0.02,
};

const tableView = {
  marginTop: Dimensions.get('window').height * 0.02,
};

const tableHeaderValue = {
  fontFamily: 'comfortaa-bold',
  textAlign: 'center',
};
const tableValue = {
  fontFamily: 'comfortaa',
  textAlign: 'center',
};
const tableUnknownValue = {
  fontFamily: 'comfortaa-bold',
  textAlign: 'center',
  color: COLORS.RED_1,
};
const tableCorrectValue = {
  fontFamily: 'comfortaa-bold',
  textAlign: 'center',
  color: COLORS.CORRECT_GREEN,
};
const tablePublicKeyValue = {
  fontFamily: 'comfortaa-bold',
  textAlign: 'center',
  color: COLORS.PUBLICKEY_COLOR,
};

const imgStyle = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'contain',
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

const unlockIconStyle = {
  width: Dimensions.get('window').width * 0.1,
  height: Dimensions.get('window').width * 0.1,
};
export default {
  textBoxStyle,
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
  encryptTextGray,
  publicKey,
  knapsackSizeStyle,
  secondParaView,
  tableView,
  tableHeaderValue,
  tableValue,
  tableUnknownValue,
  tableCorrectValue,
  tablePublicKeyValue,
  imgStyle,
  popUpTextStyle,
  popUpTextStyleBold,
  unlockIconStyle,
};
