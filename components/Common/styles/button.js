import { COLORS } from '../../../constants/Colors'

import { Dimensions } from 'react-native'

const buttonStyle = {
    backgroundColor: COLORS.GREEN_1,
    maxWidth: Dimensions.get('screen').width * 0.4,
    height: Dimensions.get('screen').height * 0.05,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
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
    textStyle,
}