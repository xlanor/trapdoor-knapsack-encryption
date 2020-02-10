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
      ios:{
        paddingTop: 0,
      }
    })
}

const headerFont = {
    fontSize: 25,
    fontFamily: 'comfortaa-bold',
}

export default {
    containerStyle,
    headerStyle,
    headerFont,
}
