import { COLORS } from '../../../../../constants/Colors';

import { Dimensions } from 'react-native';

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
};