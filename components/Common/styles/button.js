import { Dimensions } from 'react-native';
import { COLORS } from '../../../redux-modules/constants/Colors';

const buttonStyle = {
  backgroundColor: COLORS.GREEN_1,
  minWidth: Dimensions.get('window').width * 0.2,
};
const buttonStyleBlue = {
  backgroundColor: COLORS.BLUE_1,
  minWidth: Dimensions.get('window').width * 0.2,
};

const textStyle = {
  fontFamily: 'comfortaa',
  fontSize: 17,
  textAlign: 'center',
  color: COLORS.WHITE_1,
};

export default {
  buttonStyle,
  buttonStyleBlue,
  textStyle,
};
