import { COLORS } from '../../../constants/Colors';

import { Dimensions } from 'react-native';

const borderLine = {
  borderBottomColor: COLORS.BLACK_1,
  borderBottomWidth: 5,
};

const wrapperViewBackground = {
  backgroundColor: COLORS.ORANGE_1,
  flex:0.5,
  borderBottomColor: COLORS.BLACK_1,
  borderBottomWidth: 5,
  //height: Dimensions.get('window').height * 0.09
};
const bodyViewBackground = {
  flex: 5.5,
  //height: Dimensions.get('window').height * (1-0.09)
};


const scrollViewBackground = {
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  height: '100%',
  backgroundColor: COLORS.GREEN_1,
  //backgroundColor: COLORS.WHITE_1,
};

const imageSize = {
  width: 55,
  height: 55,
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
  bodyViewBackground,
}