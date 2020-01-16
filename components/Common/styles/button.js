import { COLORS } from '../../../redux-modules/constants/Colors'

import { Dimensions } from 'react-native'

const buttonStyle = {
    backgroundColor: COLORS.GREEN_1,
    maxWidth: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.05,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingLeft:  Dimensions.get('window').width * 0.05,
    paddingRight:  Dimensions.get('window').width * 0.05,
    flexDirection: 'column',
    justifyContent: 'center',
}
const buttonStyleBlue = {
    backgroundColor: COLORS.BLUE_1,
    maxWidth: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.05,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingLeft:  Dimensions.get('window').width * 0.05,
    paddingRight:  Dimensions.get('window').width * 0.05,
    justifyContent: 'center',
}

const textStyle = {
    fontFamily: 'comfortaa',
    fontSize: 17,
    textAlign: 'center',
    color: COLORS.WHITE_1,
}

export default {
    buttonStyle,
    buttonStyleBlue,
    textStyle,
}