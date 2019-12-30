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
const textBoxStyle = {
  fontFamily: 'comfortaa-bold',
  backgroundColor: COLORS.YELLOW_1,
  borderColor:'black',
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 5,
  height:  Dimensions.get('screen').height * 0.08,
  fontSize: 20,
  paddingLeft: Dimensions.get('screen').height * 0.01,
  paddingTop: Dimensions.get('screen').height * 0.01,
  paddingBottom: Dimensions.get('screen').height * 0.01,
}

const textStyleTitleCenter = {
  fontFamily: 'comfortaa-bold',
  fontSize: 25,
  textDecorationLine: 'underline',
  paddingTop: Dimensions.get('screen').height * 0.02,
  paddingBottom: Dimensions.get('screen').height * 0.02,
}

const learnTabPad = {
  height: Dimensions.get('window').height * 0.79,
  marginLeft: Dimensions.get('window').height * 0.05,
  marginRight: Dimensions.get('window').height * 0.05,
  //backgroundColor: '#888'
}

const textStyleTitleWrapper = {
  // to wrap the text in a view so that we can apply a center align to the view only,
  alignItems: 'center'
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
  textBoxStyle,
  textStyleTitle,
  boldFont,
  textStyleHeader3,
  textStyleHeader2,
  textStyleHeader1,
  textStyleTitleCenter,
  textStyleTitleWrapper,
  learnTabPad,
  buttonRow,
  multipleButtonLeft,
  multipleButtonRight
};