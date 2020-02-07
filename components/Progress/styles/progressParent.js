import { COLORS } from '../../../redux-modules/constants/Colors';
import { Dimensions, Platform } from 'react-native';

const containerStyle = {
  marginLeft: Dimensions.get('screen').width * 0.05,
  marginRight: Dimensions.get('screen').width * 0.05,
  backgroundColor: COLORS.ORANGE_1,
}

const headerStyle = {
  backgroundColor: COLORS.ORANGE_1,
  ...Platform.select({
    ios: {
      paddingTop: 0,
    }
  })
}

const headerFont = {
  fontSize: 25,
  fontFamily: 'comfortaa-bold',
}

const imgStyle = {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'contain'
}
const popUpHeader = {
  fontSize: 25,
  fontFamily: 'comfortaa-bold',
  color: '#690000',
  marginTop: Dimensions.get('window').height * 0.01,
  marginBottom: Dimensions.get('window').height * 0.01
}
const popUpContent = {
  fontSize: 20,
  fontFamily: 'comfortaa-bold',
  color: '#690000',
  marginTop: Dimensions.get('window').height * 0.01,
  marginBottom: Dimensions.get('window').height * 0.01
}

export default {
  containerStyle,
  headerStyle,
  headerFont,
  imgStyle,
  popUpHeader,
  popUpContent
}
