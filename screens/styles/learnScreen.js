import { COLORS } from '../../constants/Colors';
import { Platform, StatusBar} from 'react-native';

const backGroundContainer = {
  paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : Platform.OS === 'android'? StatusBar.currentHeight: 0,
  flex: 1,
  backgroundColor: COLORS.ORANGE_1,
};

export default {
  backGroundContainer,
};