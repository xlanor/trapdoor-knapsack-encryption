//ignore content first. Not done
import { COLORS } from '../../../../../constants/Colors';

import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 40;
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
  height:  Dimensions.get('screen').height * 0.08,
  fontSize: 20,
  padding: Dimensions.get('screen').height * 0.01,
}


const textStyleTitleCenter = {
  fontFamily: 'comfortaa-bold',
  fontSize: 25,
  textDecorationLine: 'underline',
  paddingTop: Dimensions.get('screen').height * 0.02,
  paddingBottom: Dimensions.get('screen').height * 0.02,
}


const textStyleTitleWrapper = {
  // to wrap the text in a view so that we can apply a center align to the view only,
  alignItems: 'center'
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
  textStyleTitleWrapper
};