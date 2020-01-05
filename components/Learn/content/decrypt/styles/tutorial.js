import { COLORS } from '../../../../../constants/Colors';

import { Dimensions } from 'react-native';

const DF1Width = Dimensions.get('window').width * 0.7
const DF1Height = DF1Width/665*75
const DF2Width = Dimensions.get('window').width * 0.4
const DF2Height = DF2Width/309*59

const textStyleTitle = {
  fontFamily: 'comfortaa',
  fontSize: 20,
  paddingTop: Dimensions.get('screen').height * 0.02,
  paddingBottom: Dimensions.get('screen').height * 0.01,
}

const textStyleHeader1 = {
  fontFamily: 'comfortaa',
  fontSize: 15,
  paddingBottom: Dimensions.get('screen').height * 0.02,
}

const textStyleHeader2 = {
  fontFamily: 'comfortaa',
  fontSize: 18,
  paddingBottom: Dimensions.get('screen').height * 0.02,
}

const textStyleHeader3 = {
  fontFamily: 'comfortaa',
  fontSize: 18,
  paddingBottom: Dimensions.get('screen').height * 0.02,
  paddingTop: Dimensions.get('screen').height * 0.02,
}

const textStyle = {
  fontFamily: 'comfortaa',
}

const boldFont = {
  fontFamily: 'comfortaa-bold',
  fontWeight: 'bold',
}

const textStyleTitleWrapper = {
  // to wrap the text in a view so that we can apply a center align to the view only,
  alignItems: 'center'
}

const textStyleTitleCenter = {
  fontFamily: 'comfortaa-bold',
  fontSize: 25,
  textDecorationLine: 'underline',
  paddingTop: Dimensions.get('screen').height * 0.02,
  paddingBottom: Dimensions.get('screen').height * 0.02,
}

const textStyleCiphertext = {
  fontFamily: 'comfortaa',
  fontSize: 17,
  paddingBottom: Dimensions.get('screen').height * 0.01,
}

const learnTabPad = {
  //height: Dimensions.get('window').height * 0.79,
  marginLeft: Dimensions.get('window').height * 0.05,
  marginRight: Dimensions.get('window').height * 0.05,
  //backgroundColor: '#888'
}


const textStyleSmallerText = {
  fontFamily: 'comfortaa',
  fontSize: 14,
  paddingBottom: Dimensions.get('screen').height * 0.008,
 

}

const buttonRow = { 
  alignItems: 'center', 
  marginTop: Dimensions.get('window').height * 0.02,
  marginBottom:  Dimensions.get('window').height * 0.02,
}

const multipleButtonLeft = {
  flex: 1,
  marginRight: Dimensions.get('window').width * 0.01,
}
const multipleButtonRight = {
  flex: 1,
  marginLeft: Dimensions.get('window').width * 0.01,
}

const linkStyle = {
  color: COLORS.BLUE_2,
  textDecorationLine: 'underline',
}

const DF1={
    height: DF1Height,
    width: DF1Width,
}

const DF2={
  height: DF2Height,
  width: DF2Width,
}

const imageView = {
  alignItems: 'center',
  marginTop: Dimensions.get('window').height * 0.015,
}

const popUpTextStyle = {

  fontFamily: 'comfortaa',
  fontSize: 14,
  textAlign: 'center',
  color: COLORS.ORANGE_1,
}

const tableMargin = {
  marginTop: Dimensions.get('window').height * 0.015,
  marginBottom: Dimensions.get('window').height * 0.015,
}
export default {
  textStyle,
  textStyleTitle,
  boldFont,
  textStyleHeader3,
  textStyleHeader2,
  textStyleHeader1,
  textStyleTitleCenter,
  textStyleTitleWrapper,
  textStyleCiphertext,
  textStyleSmallerText,
  learnTabPad,
  buttonRow,
  multipleButtonLeft,
  multipleButtonRight,
  linkStyle,
  DF1,
  DF2,
  imageView,
  popUpTextStyle,
  tableMargin, 
};