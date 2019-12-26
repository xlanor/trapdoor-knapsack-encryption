import { COLORS } from '../../../constants/Colors'

import { Dimensions } from 'react-native'

export const scrollViewStyle = {
    backgroundColor: COLORS.WHITE_1,
    marginBottom: Dimensions.get('window').height * 0.05,
    paddingLeft: Dimensions.get('window').width * 0.03,
    paddingRight: Dimensions.get('window').width * 0.03,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginRight: Dimensions.get('window').width * 0.05,
    width: '90%',
}

export const blackBackground = {

    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
}
const navbarBackGround = {
    backgroundColor: COLORS.YELLOW_1,
    flexDirection: 'row',
    alignItems: 'center',
    maxHeight: 45,
    width: '90%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
}

export default {
    scrollViewStyle,
    blackBackground,
    navbarBackGround,
}