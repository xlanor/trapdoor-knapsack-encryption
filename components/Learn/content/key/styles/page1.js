import { COLORS } from '../../../../../redux-modules/constants/Colors';

import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 60;
const height = width * (337 / 1940);

const progressBarSize = {
  width: width,
  height: height,
}

const titleStyle = {
  fontFamily: 'comfortaa-bold',
  fontSize: 25,
  marginTop: Dimensions.get('screen').height * 0.02,
  marginBottom: Dimensions.get('screen').height * 0.02,
  textAlign: 'center',
  textDecorationLine: 'underline'
}
const contentHead = {
  fontFamily: 'comfortaa-bold',
  fontSize: 20,
  textAlign: 'center',
}
const contentStyle = {
  fontFamily: 'comfortaa',
  fontSize: 18,
}
const contentStyleSmall = {
  fontFamily: 'comfortaa',
  fontSize: 14,
}
const contentStyleBig = {
  fontFamily: 'comfortaa',
  fontSize: 23
}

const boldFont = {
  fontFamily: 'comfortaa-bold',
}
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
  marginTop: Dimensions.get('screen').height * 0.01,
  marginBottom: Dimensions.get('screen').height * 0.01,
}

const learnTabPad = {
  //height: Dimensions.get('window').height * 0.79,
  marginLeft: Dimensions.get('window').height * 0.05,
  marginRight: Dimensions.get('window').height * 0.05,
  //backgroundColor: '#888'
}

const buttonRow = {
  alignItems: 'center',
  marginTop: Dimensions.get('window').height * 0.02,
  marginBottom: Dimensions.get('window').height * 0.02,
}

const linkStyle = {
  color: COLORS.LINKS_BLUE,
  textDecorationLine: 'underline',
}
const privateKeyStyle = {
  color: COLORS.PRIVATEKEY_COLOR,
}
const modulusStyle = {
  color: COLORS.MODULUS_COLOR,
}
const multiplierStyle = {
  color: COLORS.MULTIPLIER_COLOR,
}
const publicKeyStyle = {
  color: COLORS.PUBLICKEY_COLOR,
}
const inverseStyle = {
  color: COLORS.MULTIPLIER_INVERSE_COLOR,
}
const knapsackSizeStyle = {
  color: COLORS.KNAPSACK_SIZE_GREY,
}
const GCDStyle = {
    color: COLORS.GCD_COLOR,
}

const popUpTextStyle = {
  fontFamily: 'comfortaa',
  fontSize: 14,
  color: COLORS.POPUP_TEXT_COLOR
}
const popUpTextStyleBold = {
  fontFamily: 'comfortaa-bold',
  fontSize: 18,
  color: COLORS.POPUP_TEXT_COLOR
}

const imgStyle = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'contain'
}

const unlockIconStyle = {
  width: Dimensions.get('window').width * 0.1,
  height: Dimensions.get('window').width * 0.1,
}

const keyboardAvoidingViewMargin = {
  marginTop: Dimensions.get('window').height * 0.05,
}
export default {
  progressBarSize,
  titleStyle,
  contentHead,
  contentStyle,
  contentStyleSmall,
  contentStyleBig,
  textBoxStyle,
  boldFont,
  learnTabPad,
  buttonRow,
  linkStyle,
  privateKeyStyle,
  modulusStyle,
  multiplierStyle,
  publicKeyStyle,
  inverseStyle,
  knapsackSizeStyle,
  GCDStyle,
  popUpTextStyle,
  popUpTextStyleBold,
  imgStyle,
  unlockIconStyle,
  keyboardAvoidingViewMargin,
};
