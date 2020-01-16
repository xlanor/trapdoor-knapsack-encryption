import { COLORS } from '../../../redux-modules/constants/Colors';
import { Dimensions } from 'react-native';

const imageStyleArrow = {
  alignSelf: 'center',
  width: 150,
  height: 150,
};

const imageStyle = {
  alignSelf: 'center',
  width: 70,
  height: 70,
};

const iconsView = {
  marginBottom: Dimensions.get('screen').height * 0.05,
}

const textBoxVersion = {
  alignSelf: 'center',
  fontFamily: 'comfortaa',
  fontSize: 16,
  textAlign: 'center',
  color:COLORS.GREY_1,
}

const textBox = {
  alignSelf: 'center',
  fontFamily: 'comfortaa',
  fontSize: 40,
  color: COLORS.RED_1,
  minWidth: 350,
  textAlign: 'center',
  overflow: 'hidden',
  padding:10,
}

const textWrapperStyle = { 
    alignItems: 'center', 
}

const wrapHomePage = {
    justifyContent: 'center',
    height: '100%',
}
export default {
  imageStyle,
  textBox,
  textWrapperStyle,
  imageStyleArrow,
  iconsView,
  wrapHomePage,
  textBoxVersion,
}