import { Dimensions, Platform } from 'react-native';
import { COLORS } from '../../../redux-modules/constants/Colors';

const containerStyle = {
  marginLeft: Dimensions.get('screen').width * 0.05,
  marginRight: Dimensions.get('screen').width * 0.05,
  backgroundColor: COLORS.ORANGE_1,
};

const headerStyle = {
  backgroundColor: COLORS.ORANGE_1,
  ...Platform.select({
    ios: {
      paddingTop: 0,
    },
  }),
};

const headerFont = {
  fontSize: 25,
  fontFamily: 'comfortaa-bold',
};

const sectionStyle = {
  marginTop: Dimensions.get('screen').width * 0.05,
};

const sectionHeader = {
  fontSize: 20,
  fontFamily: 'comfortaa-bold',
  color: COLORS.PUBLICKEY_COLOR,
  textAlign: 'center',
};

const contentStyle = {
  marginTop: Dimensions.get('screen').width * 0.015,
  fontSize: 15,
  fontFamily: 'comfortaa',
  textAlign: 'center',
};

const links = {
  textDecorationLine: 'underline',
  fontStyle: 'normal',
  color: COLORS.LINKS_BLUE,
};

export default {
  containerStyle,
  headerStyle,
  headerFont,
  sectionStyle,
  sectionHeader,
  contentStyle,
  links,
};
