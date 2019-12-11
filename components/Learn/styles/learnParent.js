import { COLORS } from '../../../constants/Colors';


const borderLine = {
  borderBottomColor: COLORS.BLACK_1,
  borderBottomWidth: 5,
};

const wrapperViewBackground = {
  flex: 1,
  flexDirection: 'column',
};

const scrollViewBackground = {
  flex: 5,
  backgroundColor: COLORS.WHITE_1,
  paddingLeft: 20,
  paddingRight: 20,
  height: '100%',
};

const imageSize = {
  width:60,
  height:60,
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
}