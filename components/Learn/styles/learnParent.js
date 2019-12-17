import { COLORS } from '../../../constants/Colors';

import { Dimensions } from 'react-native';

const borderLine = {
  borderBottomColor: COLORS.BLACK_1,
  borderBottomWidth: 5,
};

const wrapperViewBackground = {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: COLORS.ORANGE_1,
};

const scrollViewBackground = {
  flex: 5,
  paddingLeft: 20,
  paddingRight: 20,
  height: '100%',
  backgroundColor: COLORS.WHITE_1,
  //backgroundColor: COLORS.WHITE_1,
};

const imageSize = {
  width: 60,
  height: 60,
}

const nestedIconView ={
  flexDirection: 'row',
}

const wrappingIconView = {
  alignItems: 'center',
  paddingLeft: Dimensions.get('screen').width * 0.15,
  paddingRight: Dimensions.get('screen').width * 0.15,
  paddingTop: Dimensions.get('screen').height * 0.007,
  paddingBottom: Dimensions.get('screen').height * 0.007,
}

const listStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}

export default {
  borderLine,
  scrollViewBackground,
  wrapperViewBackground,
  imageSize,
  listStyle,
  wrappingIconView,
  nestedIconView,
}