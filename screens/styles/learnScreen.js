import { COLORS } from '../../constants/Colors';
import { Platform, StatusBar, Dimensions} from 'react-native';

const safeAreaHeader = {
  paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : Platform.OS === 'android'? StatusBar.currentHeight: 0,
  flex: 0,
  backgroundColor: COLORS.ORANGE_1,
}
const safeAreaHeaderKeyboard = {
}
const backGroundContainer = {
  flex: 1,
  justifyContent: "flex-end",
  backgroundColor: COLORS.WHITE_1,
};

export default {
  safeAreaHeader,
  backGroundContainer,
  safeAreaHeaderKeyboard,
};