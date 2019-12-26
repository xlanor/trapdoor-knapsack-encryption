import { COLORS } from '../../../constants/Colors'

import { Dimensions } from 'react-native'

export const scrollViewStyle = {
    backgroundColor: COLORS.WHITE_1,
    marginBottom: Dimensions.get('window').height * 0.05,
    paddingLeft: Dimensions.get('window').width * 0.03,
    paddingRight: Dimensions.get('window').width * 0.03,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
    width: '100%',
}

export const blackBackground = {

    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
}

export default {
    scrollViewStyle,
    blackBackground,
}