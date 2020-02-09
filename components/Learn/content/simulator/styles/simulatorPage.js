import { Dimensions } from 'react-native';
import { COLORS } from '../../../../../redux-modules/constants/Colors';

const iconDim = Dimensions.get('screen').height * 0.03;
const textStyle = {
  fontFamily: 'comfortaa',
  fontSize: 20,
  textAlign: 'center',
};
const keyGenWrapperView = {
  marginTop: Dimensions.get('screen').height * 0.02,
  flex: 1,
};
const textStyleTitle = {
  fontFamily: 'comfortaa-bold',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
  marginTop: Dimensions.get('screen').height * 0.05,
};
const textStyleBold = {
  fontFamily: 'comfortaa-bold',
  fontWeight: 'bold',
  fontSize: 20,
  textAlign: 'center',
};
const textStyleRow = {
  fontFamily: 'comfortaa',
  fontSize: 16,
};
const flexContainerWrapper = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: 'red',
};

const buttonWrapper = {
  paddingLeft: Dimensions.get('window').width * 0.4,
  marginTop: Dimensions.get('window').height * 0.05,
};

const genKeyButtonView = {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: Dimensions.get('window').height * 0.02,
};

const textStyleInput = {
  fontFamily: 'comfortaa-bold',
  backgroundColor: COLORS.YELLOW_1,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'solid',
  height: Dimensions.get('screen').height * 0.04,
  fontSize: 16,
  paddingLeft: Dimensions.get('screen').height * 0.003,
};

const textStyleInputUneditable = {
  flex: 4.6,
  fontFamily: 'comfortaa-bold',
  backgroundColor: COLORS.YELLOW_2,
  borderColor: 'black',
  borderWidth: 2,
  borderStyle: 'solid',
  height: Dimensions.get('screen').height * 0.04,
  fontSize: 16,
  padding: Dimensions.get('screen').height * 0.003,
};

const imageButtonStyle = {
  flex: 0.7,
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: 2,
  borderBottomColor: 'black',
  borderRightWidth: 2,
  borderRightColor: 'black',
  borderTopWidth: 2,
  borderTopColor: 'black',
  borderStyle: 'solid',
};

const roundRightCorner = {
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5,
};
const roundLeftCorner = {
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
};

const copyStyle = {
  height: iconDim,
  width: iconDim,
};

const rowView = {
  justifyContent: 'center',
  marginTop: Dimensions.get('screen').height * 0.01,
  marginBottom: Dimensions.get('screen').height * 0.01,
};

const rowKeyGen = {
  marginTop: Dimensions.get('screen').height * 0.01,
};

const learnTabPad = {
  marginLeft: Dimensions.get('window').height * 0.05,
  marginRight: Dimensions.get('window').height * 0.05,
};

const multipleButtonLeft = {
  flex: 1,
  marginRight: Dimensions.get('window').width * 0.01,
};
const multipleButtonRight = {
  flex: 1,
  marginLeft: Dimensions.get('window').width * 0.01,
};

export default {
  textStyle,
  textStyleTitle,
  textStyleBold,
  textStyleRow,
  flexContainerWrapper,
  buttonWrapper,
  rowView,
  keyGenWrapperView,
  textStyleInput,
  rowKeyGen,
  genKeyButtonView,
  copyStyle,
  textStyleInputUneditable,
  imageButtonStyle,
  roundRightCorner,
  roundLeftCorner,
  learnTabPad,
  multipleButtonRight,
  multipleButtonLeft,
};
