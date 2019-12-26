import { COLORS } from '../../../../../constants/Colors';

import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 60;
const height = width * (337/1940);

const progressBarSize = {
    width: width,
    height: height,
}

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
  height: Dimensions.get('window').height * 0.8,
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

export default {
  textStyleTitle,
  textStyleHeader1,
  textStyleHeader2,
  textStyleHeader3,
  progressBarSize,
  textStyle,
  textBoxStyle,
  boldFont,
  textStyleTitleCenter,
  textStyleTitleWrapper,
  learnTabPad,
  buttonRow,
};